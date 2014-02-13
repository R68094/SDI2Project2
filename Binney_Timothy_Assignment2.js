//alert("JavaScript works!");
// Timothy Binney
//SDI Project 2
// 1402 Term Number


// Initial variables

var myName = "You";
var myDragon = "Synethra";
var myPrompt;
var myConfirm;
var health = 150;
var myGroup = 4;
var myClassPrompt;

// initial output
console.log(myName + " arrive at the lair far earlier then your group!")




// Prompt
myClassPrompt = prompt("What Class are you Warrior or Archer? Enter Here");

myPrompt = prompt("Before your group faces " + myDragon + " Choose bow or sword? Enter Here");


// Procedure
if (myClassPrompt === "archer" && myPrompt === "bow") {
    console.log(myName + " and your group prepare a ranged strategy to fight " + myDragon + " !");
}   else  {
    console.log(myName + " and your group prepare a full on brute force strategy to fight " + myDragon + " !");
    if (myPrompt === "sword" || myClassPrompt === "warrior") {
    
    } else
        console.log(myName + " and your group prepare a full on brute force strategy to fight " + myDragon + " !");
};


// Confirm

myConfirm  = confirm("Does your group need buffs before you enter into " + myDragon + "\'s Lair?");


// Boolean Function
var booleanFunction = function(buffs,people) {
    if (buffs === true) {
        console.log("We need buffs!");
        while (people > 0) {
        console.log("A group member throws out a buff");
        people--;
            }
    } else
        console.log("All buffs are out!");
    
    return(buffs);

    };
    
returnBoolean = booleanFunction(myConfirm,myGroup);

console.log("You launch your layed out strategy against the beast!");
// Number Function

var battle = function (hitpoints) {
    for (var h = hitpoints; h > 0; h = h - 15) {
        
       console.log("The dragon has " + h + " left!");
        console.log("You hit the dragon for 15 points of damage!");
        };
        
return h;
    
};

dragonHealth = battle(health);

console.log(myDragon + " Falls to her face! Because she has " + dragonHealth + " health left!")


// String Function


var goSeperateWays = function() {
    var splitUp = prompt("Would you Like to go home now or wait a bit?")
    
    if (splitUp === "go home") {
    console.log("The adventurers take their loot and " + splitUp + " to their homelands.");
    }
    else {
    console.log("The adventurers " + splitUp + " to chat and then go to their homelands.");
        
    }
    
    return(splitUp); 
};

var partyDisband = goSeperateWays();










