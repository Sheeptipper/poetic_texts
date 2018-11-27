

have_coordinates = function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        //heading = position.coords.heading;
        console.log(position);

        //populate html tag based on location
        //document.getElementById("gps_content").innerHTML = "My current position is " + lat + " , " + lon;
    
    }

//produces error messages if there is a problem
onError = function(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    //listener to track changes in location
    //step 1: set options for geolocation
    var options = {enableHighAccuracy: true,timeout: 5000,maximumAge: 0,desiredAccuracy: 0, frequency: 1 };

//step 2: the watchPosition method listens for changes in position (latitude and longitude)
    navigator.geolocation.watchPosition(have_coordinates, onError, options);




function proximity(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var distance_in_km = R * c; // Distance in km
  var distance_in_miles = distance_in_km/1.609344;
  var distance_in_feet = distance_in_miles * 5280;

 
  return {km: distance_in_km, mi: distance_in_miles, ft: distance_in_feet};
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
