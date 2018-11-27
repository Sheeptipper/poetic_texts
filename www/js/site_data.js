site = {name:"where I was born", lat:"38.787270", lon:"-90.463581", line:"they wade in brackish water", size:20}// obejct with properties

sites = [
{name:"lest we forget", lat:"41.880833", lon:" -87.625000", line:"no stopping and no standing", size: 30},// obejct with properties

{name: "a prototype named Custom Error", lat: "41.883905", lon:"-87.616075 ",line: " Is such a difficult pose to keep up", size: 40}, 

{name:"voyeurism of an audience", lat: "41.878341", lon: "-87.622900", line: "Fix my sight", size: 50}

]

number_of_sites = sites.length

console.log("value of site is ", site)
console.log("site name is: ", site.name)
console.log("name of first site in sites is" , sites[0].name)
console.log("name of second site in sites is" , sites[1].name)
console.log ("name of third side in sites is", sites[2].name)
console.log("number of sites is", number_of_sites)

//print all of the site lines ---- via a loop
for(i=0; i<number_of_sites; i++ ){
	site_line = sites[i].line
	console.log(i, site_line) 
}






