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
var r, g, b;;

var sen = ""
var markovReady = false;


fetch('Nietzsche.txt')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    a = text
    //code to set up rita markov chain model
    markov = new RiMarkov(4);
    markov.loadText(a);
    markovReady = true;
    //console.log(a)



  });

  function setup() {
      createCanvas(window.innerWidth, window.innerHeight);
      r = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
  }

  function draw() {
    background(r,g,b)
    // put drawing code here
    fill(r);
    textSize(50)
    textAlign(CENTER)
    //translate teh orgin of the grid to the center of the screen
    translate(width/2, width/3)
    // text("lat: " + lat + "\n" + "lon: " + lon, -200, -200, 400,400);

    //set the variable distance to the result of the proximity function


        //here, we assemble the text for display

        textToPrint ="I AM " + sen ;
        textToPrint1 ="I WANT " + sen;
        textToPrint2 ="I LOVE " + sen;


        //here we print the text for display
        text(textToPrint, -width/2, r, width, height)
        text(textToPrint1, -width/2, g, width, height)
        text(textToPrint2, -width/2, b, width, height)

}





  function deviceMoved() {
      r = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
      if(markovReady == true) {
          sen = markov.generateSentences(1);
          //textToPrint = sen

          console.log("sen " + sen)

    }
}
