var buttoncolours = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userClickedPattern = [];
var level = 0;

var started = false;

$(document).keypress(function() {
    if (!started) {
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    
    userClickedPattern = [];
    
    level++;

    var randomnumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour = buttoncolours[randomnumber]

    gamepattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $("h1").text("Level " + level);
}


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
})
function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamepattern[currentLevel]) {

        if (userClickedPattern.length === gamepattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000)
        }

        console.log("success")
    } else {

        console.log("wrong")
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200)

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamepattern = [];
    started = false;

}