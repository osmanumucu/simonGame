var buttoncolours = ["red", "blue", "green", "yellow"];
var gamepattern = [];

function nextSequence() {
    
    var randomnumber = Math.floor(Math.random() * 4);


    var randomChosenColour = buttoncolours[randomnumber]

    gamepattern.push(randomChosenColour);
}

