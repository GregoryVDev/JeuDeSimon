let generateColor = ["red", "blue", "green", "yellow"];
let colorSuits = new Array();
let playerChoices = [];
let i = 0;
let x = 0;
let z = 0;
let currentIndex = 0;
let cardsLocked = true;

function game() {
  const start = document.getElementById("start");

  start.addEventListener("click", function () {
    start.style.visibility = "hidden";
    console.log("Le jeu a démarré !");
    generatorColor();
  });
}

game();

function generateInt() {
  return Math.floor(Math.random() * 4);
}

function generatorColor() {
  colorSuits[i] = generateColor[generateInt()];
  // console.log("generateColor :", colorSuits, colorSuits.length, x);
  i++;
  x = 0;
  displayColors();
}

function displayColors() {
  setTimeout(function () {
    document.getElementById("display").style.background = "white"; // bg white entre les couleurs
    x++;
    if (x == colorSuits.length) {
      // une fois qu'on a affiché la liste entière
    }
    if (x < colorSuits.length) {
      // tant qu'on a pas affiché la liste entiere
      displayColors(); //on répète la boucle
    }
  }, 1050);
  setTimeout(function () {
    document.getElementById("display").style.background = colorSuits[x]; // on applique le background correspondant à la couleur [y] dans la liste
  }, 350);
  playerChoices = Array();
  z = 0;
}

document
  .querySelectorAll("#red, #blue, #green, #yellow")
  .forEach((colorChoices) => {
    colorChoices.setAttribute("role", "button");
    colorChoices.style.cursor = "pointer";
    colorChoices.addEventListener("click", color);
  });

function arraysEqual(arr1, arr2) {
  // On vérifie que les tableaux sont identiques
  if (arr1.length !== arr2.length) {
    // Si ils font pas la même longueur, on va pas plus loin
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // Si ils ont la même longueur, alors
    if (arr1[i] !== arr2[i]) {
      // on vérifie chaque ligne et si une est différente
      return false; // on return false
    }
  }
  return true; // dans les autres cas, les deux listes sont identiques
}

function color() {
  const chosenColor = this.id;

  playerChoices.push(chosenColor);

  // Vérifiez d'abord si currentIndex est inférieur à la longueur des deux tableaux
  if (currentIndex < colorSuits.length && currentIndex < playerChoices.length) {
    // Ensuite, vérifiez si la couleur choisie par le joueur correspond à la couleur attendue
    if (playerChoices[currentIndex] === colorSuits[currentIndex]) {
      // Si c'est le cas, incrémente currentIndex uniquement si la séquence n'est pas terminée
      if (currentIndex === colorSuits.length - 1) {
        console.log("Bravo ! Vous avez reproduit la séquence correctement.");
        generatorColor();
        playerChoices = [];
        // Ajoutez ici le code pour afficher la prochaine couleur ou augmenter la difficulté
      } else {
        currentIndex++;
      }
    } else {
      console.log("Vous avez fait une erreur. Fin du jeu !");
      endOfGame();
    }
  }
}

function endOfGame() {
  document.getElementById("start").style.visibility = "visible";
  playerChoices = new Array();
  colorSuits = new Array();
  i = 0;
  z = 0;
  x = 0;
}
