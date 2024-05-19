let generateColor = ["red", "blue", "green", "yellow"];
let colorSuits = [];
let playerChoices = [];
let i = 0;
let x = 0;
let currentIndex = 0;
let cardsLocked = true;
let points = 0;

function game() {
  const start = document.getElementById("start");

  start.addEventListener("click", function () {
    start.style.visibility = "hidden";
    points = 0; // Reset points at the start of a new game
    updatePointsDisplay(); // Update points display
    generatorColor();
  });
}

game();

function generateInt() {
  return Math.floor(Math.random() * 4);
}

function generatorColor() {
  colorSuits[i] = generateColor[generateInt()];
  i++;

  currentIndex = 0;
  x = 0;
  cardsLocked = true;
  document.getElementById("displayMessage").innerHTML = ""; // Clear message before starting
  displayColors();
}

function displayColors() {
  setTimeout(function () {
    document.getElementById("display").style.background = "white"; // bg white entre les couleurs
    x++;
    if (x == colorSuits.length) {
      // une fois qu'on a affiché la liste entière
      document.getElementById("displayMessage").innerHTML = "À vous de jouer !"; // Laisse un message pour prévenir que c'est au joueur de jouer
      cardsLocked = false; // Débloquer les cartes
    }
    if (x < colorSuits.length) {
      // tant qu'on a pas affiché la liste entière
      displayColors(); // on répète la boucle
    }
  }, 1050);
  setTimeout(function () {
    document.getElementById("display").style.background = colorSuits[x]; // on applique le background correspondant à la couleur [y] dans la liste
  }, 350);
  playerChoices = [];
}

document
  .querySelectorAll("#red, #blue, #green, #yellow")
  .forEach((colorChoice) => {
    colorChoice.setAttribute("role", "button");
    colorChoice.style.cursor = "pointer";
    colorChoice.addEventListener("click", color);
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
      document.getElementById("displayMessage").innerHTML =
        "Perdu ! Vous avez marqué " + points + " points"; // on affiche le message de fin
      return false; // on return false
    }
  }
  return true; // dans les autres cas, les deux listes sont identiques
}

function color() {
  if (cardsLocked) return; // Ignorer les clics si les cartes sont bloquées

  const chosenColor = this.id;

  playerChoices.push(chosenColor);

  // Vérifiez si la couleur choisie par le joueur correspond à la couleur attendue
  if (playerChoices[currentIndex] === colorSuits[currentIndex]) {
    // Si c'est le cas, incrémente currentIndex uniquement si la séquence n'est pas terminée
    if (currentIndex === colorSuits.length - 1) {
      points++; // Incrémente les points
      updatePointsDisplay(); // Mettre à jour l'affichage des points
      playerChoices = [];
      setTimeout(() => {
        document.getElementById("displayMessage").innerHTML = ""; // Clear the message immediately when the sequence is correct
        setTimeout(generatorColor, 500); // Attendre 0.5 seconde avant de générer une nouvelle couleur
      }, 200); // Give some time to the player to see the successful sequence
    } else {
      currentIndex++;
    }
  } else {
    endOfGame();
  }
}

function updatePointsDisplay() {
  document.getElementById("points").innerHTML = "Points : " + points;
}

function endOfGame() {
  document.getElementById("start").style.visibility = "visible";
  document.getElementById("displayMessage").innerHTML =
    "Fin du jeu. Vous avez marqué " +
    points +
    " points. Cliquez sur 'Jouer' pour recommencer.";
  playerChoices = [];
  colorSuits = [];
  i = 0;
  points = 0; // Réinitialiser les points à la fin du jeu
}
