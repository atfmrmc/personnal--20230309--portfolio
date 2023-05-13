import * as THREE from "three";
import gsap from "gsap";

// Selectors
const cursorSmallCircle = document.querySelector(".cursorSmallCircleDiv");
const cursorSmallCircleWidth = cursorSmallCircle.offsetWidth;
const cursorSmallCircleHeight = cursorSmallCircle.offsetHeight;
const cursorBigCircle = document.querySelector(".cursorBigCircleDiv");
const cursorBigCircleWidth = cursorBigCircle.offsetWidth;
const cursorBigCircleHeight = cursorBigCircle.offsetHeight;

// Textures
const textureLoader = new THREE.TextureLoader();
const TextureMatcap = textureLoader.load("textures/matcaps/blue-satin.png");

// Canvas
const canvas = document.querySelector("canvas.spinning-wireframe");

// Scene
const sceneSpinningObject = new THREE.Scene();
sceneSpinningObject.background = null;

// Size
const sizeSpinningObject = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizeSpinningObject.width = window.innerWidth;
  sizeSpinningObject.height = window.innerHeight;

  // Update camera
  cameraSpinningObject.aspect =
    sizeSpinningObject.width / sizeSpinningObject.height;
  cameraSpinningObject.updateProjectionMatrix();

  // Update renderer
  renderSpinningObject.setSize(
    sizeSpinningObject.width,
    sizeSpinningObject.height
  );
  renderSpinningObject.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// // Objects

// Main Crystal
const SpinningObjectGeometry = new THREE.OctahedronGeometry(1);
const SpinningObjectMaterial = new THREE.MeshMatcapMaterial({
  matcap: TextureMatcap,
});
// SpinningObjectMaterial.flatShading = true;

const SpinningObject = new THREE.Mesh(
  SpinningObjectGeometry,
  SpinningObjectMaterial
);
sceneSpinningObject.add(SpinningObject);

// // Smaller Crystals
// const SpinningObjectsSmall = [];

// for (let i = 0; i < 128; i++) {
//   const SpinningObjectSmall = new THREE.Mesh(
//     SpinningObjectGeometry,
//     SpinningObjectMaterial
//   );
//   SpinningObjectSmall.scale.set(0.16, 0.16, 0.16);
//   sceneSpinningObject.add(SpinningObjectSmall);
//   SpinningObjectsSmall.push(SpinningObjectSmall);
// }

// // Camera
const cameraSpinningObject = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
cameraSpinningObject.aspect =
  sizeSpinningObject.width / sizeSpinningObject.height;
cameraSpinningObject.updateProjectionMatrix();
cameraSpinningObject.position.set(0, 0.16, 2.5);
cameraSpinningObject.lookAt(SpinningObject.position);
sceneSpinningObject.add(cameraSpinningObject);

// Lights
const ambientLightSpinningObject = new THREE.AmbientLight(0xffffff, 0.5);
const pointLightSpinningObject = new THREE.PointLight(0xffffff, 0.5);
pointLightSpinningObject.position.set(2, 2, 2);
sceneSpinningObject.add(ambientLightSpinningObject, pointLightSpinningObject);

// Renderer
const renderSpinningObject = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderSpinningObject.setSize(
  sizeSpinningObject.width,
  sizeSpinningObject.height
);
renderSpinningObject.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// //Animation

// Clock
const clock = new THREE.Clock();

// Cursor Position
const cursorThree = {
  x: 0,
  y: 0,
};

const cursorCross = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursorThree.x = -(event.clientX / sizeSpinningObject.width - 0.5);
  cursorThree.y = event.clientY / sizeSpinningObject.height - 0.5;
  cursorCross.x = event.clientX;
  cursorCross.y = event.clientY;
  updateCircles();
  //   console.log(cursor.x, cursor.y);
});

function updateCircles() {
  cursorSmallCircle.style.top =
    cursorCross.y - cursorSmallCircleHeight / 2 + "px";
  cursorSmallCircle.style.left =
    cursorCross.x - cursorSmallCircleWidth / 2 + "px";
  cursorBigCircle.style.top = cursorCross.y - cursorBigCircleHeight / 2 + "px";
  cursorBigCircle.style.left = cursorCross.x - cursorBigCircleWidth / 2 + "px";
}

// Cursor Hover
const aLinks = document.querySelectorAll("a");

aLinks.forEach((aLink) => {
  aLink.addEventListener("mouseenter", () => {
    cursorSmallCircle.classList.add("cursorSmallCircleDivHover");
    cursorBigCircle.classList.add("cursorBigCircleDivHover");
    gsap.to(SpinningObjectMaterial.color, {
      duration: 1,
      r: 153 / 255,
      g: 65 / 255,
      b: 241 / 255,
      ease: "circ.out",
    });
    gsap.to(SpinningObject.position, {
      duration: 1,
      z: -1,
      ease: "circ.out",
    });
  });

  aLink.addEventListener("mouseleave", () => {
    cursorSmallCircle.classList.remove("cursorSmallCircleDivHover");
    cursorBigCircle.classList.remove("cursorBigCircleDivHover");
    gsap.to(SpinningObjectMaterial.color, {
      duration: 1,
      r: 255 / 255,
      g: 255 / 255,
      b: 255 / 255,
      ease: "circ.out",
    });
    gsap.to(SpinningObject.position, {
      duration: 1,
      z: 0,
      ease: "circ.out",
    });
  });
});

// Animation

const animationSpinningObject = () => {
  const elapsedTime = clock.getElapsedTime();

  // Main Crystal
  // aLinks.forEach((aLink) => {
  //   aLink.addEventListener("mouseenter", () => {
  //     gsap.to(SpinningObject.rotation, {
  //       duration: 1,
  //       y: Math.PI * 2,
  //     });
  //   });
  // });

  gsap.to(SpinningObject.rotation, {
    duration: 1,
    x: Math.PI * cursorThree.y * 0.16 + 0.16,
    y: Math.PI * -cursorThree.x + elapsedTime * 0.26,
    z: Math.sin(elapsedTime) * 0.16,
  });

  gsap.to(SpinningObject.position, {
    duration: 1,
    x: Math.sin(elapsedTime) * 0.42 + cursorThree.x * 0.42,
    y: Math.sin(elapsedTime * 2) * 0.1 + cursorThree.y * 0.42,
  });

  // // Smaller Crystals
  // SpinningObjectsSmall.forEach((SpinningObjectSmall) => {
  //   gsap.to(SpinningObjectSmall.rotation, {
  //     duration: 1,
  //     x: Math.PI * cursor.y * 0.16 + 0.16,
  //     y: Math.PI * -cursor.x + elapsedTime * 0.26,
  //     z: Math.sin(elapsedTime) * 0.16,
  //   });
  //   gsap.to(SpinningObjectSmall.position, {
  //     duration: 1,
  //   });
  // });

  // SpinningObjectSmall.position.x = (Math.random() - 0.5) * 15;
  // SpinningObjectSmall.position.y = (Math.random() - 0.5) * 15;
  // SpinningObjectSmall.position.z = (Math.random() - 1) * 5;
  // SpinningObjectSmall.rotation.x = Math.random() * Math.PI;
  // SpinningObjectSmall.rotation.y = Math.random() * Math.PI;

  // SpinningObject.rotation.y = Math.PI * -cursor.x + elapsedTime * 0.26;
  // SpinningObject.rotation.x = Math.PI * cursor.y * 0.16 + 0.16;
  // SpinningObject.rotation.z = Math.sin(elapsedTime) * 0.16;

  // SpinningObject.position.x = Math.sin(elapsedTime) * 0.1 + cursor.x * 0.42;
  // SpinningObject.position.y = Math.sin(elapsedTime * 2) * 0.1 + cursor.y * 0.42;

  renderSpinningObject.render(sceneSpinningObject, cameraSpinningObject);

  window.requestAnimationFrame(animationSpinningObject);
};

animationSpinningObject();
