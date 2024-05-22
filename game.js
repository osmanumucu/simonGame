var buttoncolours = ["red", "blue", "green", "yellow"];
var gamepattern = [];

function nextSequence() {
    
    var randomnumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour = buttoncolours[randomnumber]

    gamepattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    function playSound(name) {

        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
}}

nextSequence();