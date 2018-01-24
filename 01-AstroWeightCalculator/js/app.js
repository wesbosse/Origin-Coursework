/* 
--- Variables ---
*/

// List of Planets and their attributes
var planetsList = [
    {name:"Sun", gravIndex:27.9, timeIndex:365.25, imgSrc:''},
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
  
    //Append the element and set the attributes  
    newSelection.appendChild(planetName);
    
    //Set the attributes for 
    newSelection.setAttribute("name", planetsList[i].name);
    newSelection.setAttribute("timer", planetsList[i].timeIndex);
    newSelection.setAttribute("value", planetsList[i].gravIndex);
   
    
    //Append the element to the list
    document.getElementById("planet-selection").appendChild(newSelection);
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
    //Get the users D.O.B. and split it into useable chunks
    var days = moment().diff(birthday, 'days');
    siteVisitor.years = days / timeMultiplierInFunc;

        
    
}

function displayResults() {


    //Update our visitor object with the entered weight
    var selectionList = document.getElementById("planet-selection");
    var selectedName = selectionList.options[selectionList.selectedIndex].getAttribute("name");
    var timeMultiplier = parseFloat(selectionList.options[selectionList.selectedIndex].getAttribute("timer"));
    var gravMultiplier = parseFloat(selectionList.options[selectionList.selectedIndex].getAttribute("value"));

    //Setting the users birthday
    var dayMonthYear = document.getElementById("user-birth").value.split('/');
    var birthday = dayMonthYear[2] + "-" + dayMonthYear[0] + "-" + dayMonthYear[1];

    //Update the current planet value 
    siteVisitor.weight = parseFloat(document.getElementById("user-weight").value);
    siteVisitor.currentPlanet = selectedName;



    calcWeight(gravMultiplier);
    calcAge(birthday, timeMultiplier);
    if (siteVisitor.currentPlanet === "Sun") 
    {
        siteVisitor.currentPlanet = "The Sun";
    }

    var toHTML = "If you were on " + siteVisitor.currentPlanet + " you would weigh " + siteVisitor.weight.toString() + "lbs and be " + siteVisitor.years.toString() + " years old!";
    document.getElementById("results-actual").innerHTML = toHTML;
    return false;
}

//Perform Calculations on form submit
var calcButton = document.getElementById("calculate");
calcButton.onclick = displayResults;