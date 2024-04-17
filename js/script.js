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
