let generateColor = ["red", "blue", "green", "yellow"];
let colorSuits = Array();

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
