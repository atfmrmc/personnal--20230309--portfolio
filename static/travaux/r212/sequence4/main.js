// 1 - je localise mon bouton effacer
const clearButton = document.querySelector("[data-all-clear]");
// console.info(clearButton);

// 2 - je surveille si on clique dessus
clearButton.addEventListener("click", () => {
  // console.info("effacer");
});

// je localise l'affichage
const output = document.querySelector("[data-output]");

// On défini la fonction effacer
function clear() {
  output.innerText = "";
  OperationCalcul = undefined;
}

clearButton.addEventListener("click", () => {
  //console.info('effacer')
  clear(); // au clique, j’appelle la fonction
});

// 1 - je localise mes boutons 0-9-.
const numberButtons = document.querySelectorAll("[data-number]");

// 2 - je regarde ce que je récupère
// console.log(numberButtons);

// On surveille le clique sur un des boutons 0-9 ou .
numberButtons.forEach((button) => {
  // Pour chaque bouton
  button.addEventListener("click", () => {
    // On créer un detecteur
    console.info(button.innerText); // au clique, on affiche le contenu du btn dans la console
  });
});

function appendNumber(number) {
  output.innerText += number; // On modifie l'afficheur avec le nombre
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText); // au clique, on appelle la fonction
  });
});

// je localise les boutons d'opération
const operationButtons = document.querySelectorAll("[data-operation]");

// // On surveille le clique sur un des boutons
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.innerText);
  });
});

var OperationCalcul = undefined;

// fonction qui affiche le signe de l'opération dans la zone "output"
function chooseOperation(operation) {
  if (
    output.innerText.includes("-") ||
    output.innerText.includes("+") ||
    output.innerText.includes("*") ||
    output.innerText.includes("/") ||
    output.innerText.includes("%")
  )
    return;
  OperationCalcul = operation;
  output.innerText = output.innerText.toString() + "" + operation + "";
}

const equalsButton = document.querySelector("[data-equals]");

equalsButton.addEventListener("click", (button) => {
  calcul();
});

function calcul() {
  // si rien de saisie, on arrete la le caclul
  if (output.innerText === "") return;
  let split = output.innerHTML.split(OperationCalcul);

  // recupération des 2 valeurs
  let nombre1 = parseFloat(split[0]);
  let nombre2 = parseFloat(split[1]);

  // verification qu'il y a bien eu des valeurs de saisies
  if (isNaN(nombre1) || isNaN(nombre2)) return;

  // console.log(nombre1);
  // console.log(nombre2);
  // console.log(OperationCalcul);

  let moncalcul;

  switch (OperationCalcul) {
    case "+":
      moncalcul = nombre1 + nombre2;
      break;
    case "-":
      moncalcul = nombre1 - nombre2;
      break;
    case "*":
      moncalcul = nombre1 * nombre2;
      break;
    case "/":
      moncalcul = nombre1 / nombre2;
      break;
    default:
      return;
  }
  //console.info(moncalcul)

  output.innerText = moncalcul;
  OperationCalcul = undefined;
}
// declaration de la variable à mettre en tout debut de script

const switchStyleBtn = document.getElementById("switchStyleBtn");

console.log(switchStyleBtn);

switchStyleBtn.addEventListener("click", () => {
  document.body.classList.toggle("switchedStyle");
});
