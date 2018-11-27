var lat
var lon
var site
var threshold 

// https://jsfiddle.net/479qg1vk/


function setup() {
    createCanvas(window.innerWidth, window.innerHeight, P2D)
    lat = 0
    lon = 0
    threshold = {ft: 70, mi:0.02}

    //json 
  
  // put setup code here
}

function draw() {
  background(255,255,255)
  // put drawing code here
  fill(50);
  textSize(50)
  textAlign(CENTER)
  //translate the origin of the grid to the center of the screen
  translate(width/2, height/2)
  //text("lat: " + lat + "\n" + "lon: " + lon, -200, -200, 400,400);

//set the variable distance to the result og the proximity function
  distance = proximity(lat, lon, sites[1].lat, sites[1].lon)
  console.log("value of distance", distance)

  distance_in_feet = round(distance.ft)
  distance_in_miles = distance.mi

  if (distance_in_feet > threshold){
    textToPrint = "I am " + distance_in_feet + " feet from " + sites[1].name
  } else { 
        textToPrint = sites[1].line
      }

// here to print the text for display
  text( textToPrint, -width/2, 0, width, height)
  //text(lon, 100, 0);
}

