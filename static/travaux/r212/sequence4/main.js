// 1 - je localise mon bouton effacer
const clearButton = document.querySelector("[data-all-clear]");
console.info(clearButton);

// 2 - je surveille si on clique dessus
clearButton.addEventListener("click", () => {
  console.info("effacer");
});

// je localise l'affichage
const output = document.querySelector("[data-output]");

// On défini la fonction effacer
function clear() {
  output.innerText = "";
}

clearButton.addEventListener("click", () => {
  //console.info('effacer')
  clear(); // au clique, j’appelle la fonction
});

// 1 - je localise mes boutons 0-9-.
const numberButtons = document.querySelectorAll("[data-number]");

// 2 - je regarde ce que je récupère
console.log(numberButtons);

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
