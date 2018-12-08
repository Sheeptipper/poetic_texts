let a
var have_reference_location;
var reference_coords;
var threshold;
var textCounter;
var textCounter2;
var distance;
var textToPrint;
var textToPrint2;
var accel;
var markov;
var accuracy;
var r, g, b;

fetch('Nietzsche.txt')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    a = text
    //code to set up rita markov chain model
    markov = new RiMarkov(4);
    markov.loadText(a);

  });

 function setup() {
  createCanvas(window.innerWidth, window.innerHeight, P2D);
  r = random(50, 255);
  g = random(0, 200);
  b = random(50, 255);
}

function draw() {
  background(r, g, b);
  console.log('draw');
}

function deviceMoved() {
    r = random(50, 255);
    g = random(0, 200);
    b = random(50, 255);

}
