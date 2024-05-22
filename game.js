var buttoncolours = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userClickedPattern = [];
var level = 0;

$(document).keypress(function nextSequence() {
    
    var randomnumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour = buttoncolours[randomnumber]

    gamepattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $("h1").text("Level " + level);
    level++;
});


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id")

    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
})
function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

