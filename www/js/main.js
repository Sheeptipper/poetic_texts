let a

fetch('Nietzsche.txt')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    a = text
  });


function setup() {

}

function draw() {
  text('I am', 50, 80);
  textSize(60);
}
