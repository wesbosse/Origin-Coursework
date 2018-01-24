/* 
--- Variables ---
*/

// List of Planets and their attributes
var planetsList = [
    {name:"The Sun", gravIndex:27.9, timeIndex:365.25, imgSrc:''},
    {name:"Mercury", gravIndex:0.377, timeIndex:88.0, imgSrc:''},
    {name:"Venus", gravIndex:0.9032, timeIndex:225.0, imgSrc:''},
    {name:"Earth", gravIndex:1, timeIndex:365.25, imgSrc:''},
    {name:"Moon", gravIndex:0.1655, timeIndex:365.25, imgSrc:''},
    {name:"Mars", gravIndex:0.3895, timeIndex:687.0, imgSrc:''},
    {name:"Jupiter", gravIndex:2.640, timeIndex:4333.0, imgSrc:''},
    {name:"Saturn", gravIndex:1.139, timeIndex:10759.0, imgSrc:''},
    {name:"Uranus", gravIndex:0.917, timeIndex:30689.0, imgSrc:''},
    {name:"Neptune", gravIndex:1.148, timeIndex:60182.0, imgSrc:''},
    {name:"Pluto", gravIndex:0.06, timeIndex:90580.0, imgSrc:''}
];

//The User, updated with calculations
var siteVisitor = {weight: 0.0, currentPlanet: "", years: 0.0}


/* 
--- Functions ---
*/

//Populate our selection menu
for(i = 0; i < planetsList.length; i += 1) {
    
    //Create a new option element, and the text to go inside of it  
    var newSelection = document.createElement("OPTION");
    var planetName = document.createTextNode(planetsList[i].name)
  
    //Append the element with its text and set the attributes  
    newSelection.appendChild(planetName); 

    //Append the element to the list
    $("#planet-selection").append(newSelection);
}

//Function to calculate weight using gravity multiplier
function calcWeight(gravMultiplierInFunc) {

    //Update the weight based on calculations
    siteVisitor.weight *= gravMultiplierInFunc; 
    siteVisitor.weight = siteVisitor.weight.toFixed(2);


    return false;
}

//Function to calculate age using time multiplier
function calcAge(birthday, timeMultiplierInFunc) {
    
    //Update the age based on calculations using planetary data
    var days = moment().diff(birthday, 'days');
    siteVisitor.years = days / timeMultiplierInFunc;
        
    return false;
}

//Function to gather input, run the calculations, and display the results
function displayResults() {

    //Get the selected option, and find its object in the planet list
    var selectedName = $( "#planet-selection option:selected" ).text();
    //Update our visitor object with the entered weight
    for(i = 0; i < planetsList.length; i += 1) {
        if (selectedName == planetsList[i].name) {
            //siteVisitor
        }
    }

    //Setting the users birthday
    var dayMonthYear = document.getElementById("user-birth").value.split('/');
    var birthday = dayMonthYear[2] + "-" + dayMonthYear[0] + "-" + dayMonthYear[1];

    //Update the current planet value 
    siteVisitor.weight = parseFloat(document.getElementById("user-weight").value);
    siteVisitor.currentPlanet = selectedName;

    //run the numbers
    calcWeight(gravMultiplier);
    calcAge(birthday, timeMultiplier);

    //Output HTML
    var toHTML = "If you were on " + siteVisitor.currentPlanet + " you would weigh " + siteVisitor.weight.toString() + "lbs and be " + siteVisitor.years.toString() + " years old!";
    document.getElementById("results-actual").innerHTML = toHTML;
    return false;
}

//Perform Calculations on form submit
var calcButton = document.getElementById("calculate");
calcButton.onclick = displayResults;