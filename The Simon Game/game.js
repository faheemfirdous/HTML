// global variable
const buttonColor = ["red", "blue", "green", "yellow"]; // colors
let userClickedPattern = [];
let gamePatter = [];
let Level = 0;
let started = false;


// driver code

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1)
})

$(document).keypress(function () {
    if (!started) {
        $("#level.title").text("Level " + Level);
        nextSequence();
        started = true;
    }
});


//  functions 

// next sequence generator
function nextSequence() {
    userClickedPattern = [];
    Level++;
    
    $("#level-title").text("Level " + Level);

    let randomVariable = Math.floor(Math.random() * 4); // creating random num
    let randomChosenColour = buttonColor[randomVariable] // choicing a random color 
    gamePatter.push(randomChosenColour) // adding that color to the gamepatter array

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

// sound playing function
function playSound(name) {
    var beat = new Audio("sounds/" + name + ".mp3");
    beat.play();
}

// function for grey animatin on clicks
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    // removing class after 100milisecond of delay
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// function to check users input 
function checkAnswer(currentLevel) {
    if (gamePatter[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePatter.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        // alerting wrong
        console.log("wrong");
        playSound("wrong");
        
        // adding and removing game over class
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        
        // changing h1
        $("#level-title").text("Game Over, Press Any Key to Restart!");
        
        // starting new game
        startOver();
    }
};

function startOver() {
    // reseting game
    Level = 0;
    gamePatter = [];
    started = false;
}


