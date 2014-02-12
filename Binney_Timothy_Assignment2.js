//alert("JavaScript works!");
// Timothy Binney
//SDI Project 2
// 1402 Term Number


// Initial variables

var myName = "You";
var myDragon = "Synethra";
var myGroup = 4;
var celebrationTime = "Hell Yea We got the loots!";
var myPrompt = prompt("Before your group faces " + myDragon + " Choose bow or sword? Enter Here");
var myConfirm = confirm("Did your group fully rebuff before you enter into " + myDragon + "\'s Lair?");
var health = 150;

console.log(myName + " arrive at the lair far earlier then your group!")




// Prompt
myPrompt;


// Procedure
if (myPrompt === "bow") {
    console.log(myName + " and your group prepare a ranged strategy to fight " + myDragon + " !");
}   else  {
        console.log(myName + " and your group prepare a full on brute force strategy to fight " + myDragon + " !");
};


// Confirm

myConfirm;


// Boolean Function
var booleanFunction = function(buffUp){
     var myBuffs = 4;
        while (myBuffs > 0); {
            console.log("A group member throws a buff on you! hooray!");
        myBuffs--;
    }
            console.log("Your group is now ready to move forward!");
            
    return true;
};   

booleanFunction();

console.log(booleanFunction);



// Number Function

var battle = function (health) {
    for (var h = health; h > 0; h = h - 15) {
        
       console.log("The dragon has " + h);
        console.log("You hit the dragon for 15 points of damage!");
        };
        
return h;
    
};
    console.log(myDragon + " Falls to her face!")

battle(health);

// String Function