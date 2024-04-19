// let generateColor = ["red", "blue", "green", "yellow"];
// let colorSuits = Array();
// let playerChoices = []; // Table for storing player choices
// let gameInProgress = false;

// // Function to indicate that you have clicked on a colour

// function game() {
//   const start = document.getElementById("start");
//   const display = document.getElementById("display");

//   start.addEventListener("click", function () {
//     // playersColorChoice();
//     // displayColors();
//     // colorCapture();
//     resetGame();

//     gameInProgress = true;

//     generateNextColor();
//     display.style.background = colorSequence[0];
//     console.log("Le jeu a démarré !");

//     setTimeout(function () {
//       display.style.background = "white";
//     }, 1000);
//   });
// }

// game();

// function generateInt() {
//   return Math.floor(Math.random() * 4);
// }

// function generateNextColor() {
//   colorSequence.push(generateColor[generateInt()]);
// }

// function resetGame() {
//   colorSequence = [];
//   playerChoices = [];
//   gameInProgress = false;
// }

// function processColor(selectedColor) {
//   const correctColor = colorSequence[playerChoices.length];

//   if (selectedColor === correctColor) {
//     console.log("Correct !");
//     playerChoices.push(selectedColor);

//     if (playerChoices.length === colorSequence.length) {
//       generateNextColor();
//       setTimeout(function () {
//         display.style.background = colorSequence[playerChoices.length];
//       }, 1000);
//       playerChoices = [];
//     } else {
//       displayNextColor();
//     }
//   } else {
//     console.log("Faux ! Vous avez perdu !");
//     endOfGame();
//   }
// }

// function color() {
//   console.log(`Vous avez cliqué sur ${this.id}`);
// }

// Selects all elements with the IDs "red", "blue", "green" and "yellow".
// document
//   .querySelectorAll("#red, #blue, #green, #yellow")
//   // For each item selected, perform the following function
//   .forEach((colorChoices) => {
//     // Adds a "role" attribute with the value "button" to each element
//     colorChoices.setAttribute("role", "button");
//     // Changes the mouse cursor as it hovers over each element to indicate that they are clickable
//     colorChoices.style.cursor = "pointer";
//     // Adds a "click" event listener to each element which executes the "color" function when they are clicked
//     colorChoices.addEventListener("click", color);
//   });

// function playersColorChoice() {
//   for (let i = 0; i < 15; i++) {
//     colorSuits[i] = generateColor[generateInt()];
//   }
// }

// playersColorChoice();

// let x = 0;

// function displayColors() {
//   setTimeout(function () {
//     document.getElementById("display").style.background = "white";
//     x++;
//     if (x < colorSuits.length) {
//       displayColors();
//     }
//   }, 2000);
//   setTimeout(function () {
//     document.getElementById("display").style.background = colorSuits[x];
//     console.log(colorSuits[x]);
//   }, 1000);
// }

// function colorCapture() {
//   const colorDivs = document.querySelectorAll("#colorplayers > div");

//   colorDivs.forEach((div) => {
//     div.addEventListener("click", function handleClick() {
//       const selectedColor = this.id;
//       playerChoices.push(selectedColor); // Adds the chosen colour to the player's choice table
//       console.log("Couleur choisie par le joueur :", selectedColor);

//       processColor(selectedColor);

//       div.removeEventListener("click", handleClick);
//     });
//   });
// }

// function processColor(color) {
//   console.log("Traitement de la couleur", color);
// }

// function displayNextColor() {
//   if (!gameInProgress) {
//     return;
//   }

//   const nextColorIndex = playerChoices.length;
//   const nextColor = colorSuits[nextColorIndex];

//   const displayElement = document.getElementById("display");

//   displayElement.style.background = nextColor;

//   setTimeout(function () {
//     displayElement.style.background = "white";
//   }, 1000);
// }

// function verifyPlayerChoices() {
//   console.log("choix du joueur:", playerChoices);

//   const correctSequence = ["red", "blue", "green", "yellow"];

//   if (arraysAreEqual(playerChoices, correctSequence)) {
//     console.log("Bravo ! Vous avez reproduit la séquence correcte.");
//   } else {
//     console.log("Dommage, votre séquence est inccorecte.");
//   }
// }

// function arraysAreEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function endOfGame() {
//   console.log("Fin du jeu !");
// }

let generateColor = ["red", "blue", "green", "yellow"];
let colorSuits = [];
let playerChoices = [];
let i = 0;
let x = 0;
let z = 0;

function game() {
  const start = document.getElementById("start");

  start.addEventListener("click", function () {
    start.style.visibility = "hidden";

    console.log("Le jeu a démarré !");
  });
}

game();

function generateInt() {
  return Math.floor(Math.random() * 4);
}

function generatorColor() {
  colorSuits[i] = generateColor[generateInt()];
  i++;

  displayColors();
  console.log(colorSuits);
}

// function turnPlayer() {
//   // function qui correspond au bouton et qui mettra dans le tableau du joueur la couleur choisit par le joueur
// }

generatorColor();

function displayColors() {
  setTimeout(function () {
    document.getElementById("display").style.background = "white";
    x++;
    if (x < colorSuits.length) {
      displayColors();
    }
  }, 2000);
  setTimeout(function () {
    document.getElementById("display").style.background = colorSuits[x];
  }, 1000);
}

document
  .querySelectorAll("#red, #blue, #green, #yellow")
  .forEach((colorChoices) => {
    colorChoices.setAttribute("role", "button");
    colorChoices.style.cursor = "pointer";
    colorChoices.addEventListener("click", color);
  });

function color() {
  console.log(`Vous avez cliqué sur ${this.id}`);
}

function endOfGame() {
  console.log("Fin du jeu !");
}
