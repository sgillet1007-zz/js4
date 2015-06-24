var personArrayVic = [];
var phoneArrayVic = [];
var streetArrayVic = [];

var victimsNo = prompt("how many victims are there?","[enter number]");

for (i=0;i<Number(victimsNo);i++) {
	personArrayVic.push(prompt("victim " + i + " name is: ", "enter name"));
	phoneArrayVic.push(prompt("victim " + i + " phone number is: ", "enter name"));
	streetArrayVic.push(prompt("victim "  + i + " street name is: ", "enter name"));
}

var personArrayVol = [];
var phoneArrayVol = [];
var streetArrayVol = [];

var volunteersNo = prompt("how many volunteers are there?", "[enter number]");

for (i=0;i<Number(volunteersNo);i++) {
	personArrayVol.push(prompt("volunteer " + i + " name is: ", "enter name"));
	phoneArrayVol.push(prompt("volunteer " + i + " phone number is: ", "enter name"));
	streetArrayVol.push(prompt("volunteer "  + i + " street name is: ", "enter name"));
}

alert("Number of Victims: " + personArrayVic.length + "\nNumber of Volunteers: " + personArrayVol.length + "\nVictim Names: " + personArrayVic + "\nVolunteer Names: " + personArrayVol);
