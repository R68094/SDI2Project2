//alert("JavaScript works!");
// Timothy Binney
// SDI Project 2


var attack;
var fight;
var reallyAttack;
var getMyName;


var yell= function (message) {
    console.log(message);
    };


var getMyName = function () {
    var myName= prompt("Enter Your Name");
    
    yell("Hello my name is " + myName);
      
};

getMyName();

yell("I'm going to enter this dragons lair and attack it! Crazy maybe.. but i like it.")


var reallyAttack = confirm("Do you really want to attack the dragon!")
    if (reallyAttack === true) {
        yell("You begin moving forward toward the dragon.")
    }
        else
        yell("You decide the dragon should be attack from a different angle in a minute!")




var battle = function (health) {
    for (var h = health; h > 0; h = h - 15) {
        
       yell("The dragon has " + h);
        yell("You hit the dragon for 15 points of damage!");
        };
        
return h;
    
};
attack = battle(120);

yell("The Dragon runs away to die peacefully, while your distracted by the loot!");
yell("While your collecting loot the dragon slinks back to try and attack you! look out!")

var fight = function () {
    var defend = confirm("Do you have enough arrows?");
    
    if (defend === true) {
        yell("Finish Him!!")
    } else 
    yell("Hide until it is safe again you cowardly lion. Then sneak up on the dragon and finish him.")
    
    return defend;
    
}

fight();


yell("You leave the dungeon with pockets of loot and a dragons head!!!")














