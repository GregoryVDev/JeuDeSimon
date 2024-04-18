let generateColor = ["red", "blue", "green", "yellow"];
let colorSuits = Array();

// Function to indicate that you have clicked on a colour

function color() {
  console.log(`Vous avez cliqué sur ${this.id}`);
}

// Selects all elements with the IDs "red", "blue", "green" and "yellow".
document
  .querySelectorAll("#red, #blue, #green, #yellow")
  // For each item selected, perform the following function
  .forEach((colorChoices) => {
    // Adds a "role" attribute with the value "button" to each element
    colorChoices.setAttribute("role", "button");
    // Changes the mouse cursor as it hovers over each element to indicate that they are clickable
    colorChoices.style.cursor = "pointer";
    // Adds a "click" event listener to each element which executes the "color" function when they are clicked
    colorChoices.addEventListener("click", color);
  });

function generateInt() {
  return Math.floor(Math.random() * 4);
}

function playersColorChoice() {
  for (let i = 0; i < 15; i++) {
    colorSuits[i] = generateColor[generateInt()];
  }
}

playersColorChoice();

let x = 0;

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
    console.log(colorSuits[x]);
  }, 1000);
}

displayColors();

function colorCapture() {
  const colorDivs = document.querySelectorAll("#colorplayers > div");

  colorDivs.forEach((div) => {
    div.addEventListener("click", function () {
      const selectedColor = this.id;

      console.log("Couleur choisie par le joueur :", selectedColor);

      processColor(selectedColor);
    });
  });
}

colorCapture();

function processColor(color) {
  console.log("Traitement de la couleur", color);
}
