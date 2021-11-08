const phrase = "la zia maria è una spia"; // decido le mie parole
const words = phrase.split(" "); // separo le parole con uno spazio, creo nelle "" uno spazio vuoto
let allButtons;
let iterator = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  words.forEach((word) => {
    createElement("button", word); // creo un elemento che usa come contenuto una variabile scelta da me-> word
  });

  allButtons = selectAll("button");
  console.log(allButtons);
}

function draw() {
  if (mouseIsPressed == false) {
    background("yellowgreen");
  } else if (mouseIsPressed == true) {
    background("powderblue");
  }

  iterator++; // per ogni ciclo ogni elemento deve essere
  allButtons.forEach((singleButton, i) => {
    let x = noise((iterator + 40 * i) / 400) * windowWidth; //si muove casualmente per lo schermo ma i bottoni sono staccati tra loro
    let y = noise((iterator - 40 * i) / 400) * windowWidth;

    singleButton.style("position: absolute");
    singleButton.position(x, y);
  });
}
