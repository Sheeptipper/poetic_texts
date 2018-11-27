var lat
var lon
var site
var threshold
var img;
var fontSizes



function setup() {
    createCanvas(window.innerWidth, window.innerHeight, P2D);
    img = loadImage("image1.jpg"); 
    lat = 0
    lon = 0
    threshold = {ft:50, mi:.015}
    console.log("walking sketch")
   // fontSizes = [50, 30, 20]

  // put setup code here
}

//key lines starts here
function draw() {
    background(255,255,255)
// Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/2, img.width/2, img.height/2);

    
  // put drawing code here
  fill(50);
  //textSize(50)
  textAlign(CENTER)
  //translate teh orgin of the grid to the center of the screen
  translate(width/2, height/2)
  // text("lat: " + lat + "\n" + "lon: " + lon, -200, -200, 400,400);
  textYPosition = 0
  textXPosition = 10

  
for(i=0; i<sites.length; i++){

 /* if(i==0){
    textSize(20)
  }
    if(i==1){
    textSize(20)
  }*/
 // textSize(fontSizes[i])
    textSize(sites[i].size)
    distance = proximity(lat,lon,sites[i].lat,sites[i].lon)
    console.log("value of distance", distance)
    //record distance in feet and miles 
    distance_in_feet = round(distance.ft)
    distance_in_miles = distance.mi

    //here, we assemble the text for display based on our location
    if(distance_in_feet > threshold.ft ){
        textToPrint ="I am " + distance_in_feet + " feet from " + sites[i].name

      } else {
        textToPrint = sites[i].line
     }



       // or site.line to print line or site.lat to print lat     or distance.mi + miles from
  //e.g. text("I am" + distance.ft.toFixed(2) + " feet from " + site.line,-width/2,0,width,height)

  //here we print the text for display
    text(textToPrint, -width/2, textYPosition, width, height)
    textYPosition += 50
    textXPosition +=120
  
  
  //text(lon, 100, 0);
   }
}
