let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let gameInProgress = false;
let level = 0;
let currentLevel = 0;

function playButton(buttonID){
    new Audio("sounds/"+buttonID+".mp3").play();
    $("#"+buttonID).fadeOut(100).fadeIn(100);
}

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("h1").text("Level " + level);
    playButton(randomChosenColour);
}

function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    new Audio("sounds/wrong.mp3").play();
    $("h1").html("You lose on level: "+level+"<br>Press any Key to Start");

    gamePattern = [];
    level = 0;
    currentLevel = 0;
    gameInProgress = false;
}

$(".btn").click(function () {
    if(!gameInProgress) return;

    if(gamePattern[currentLevel] === this.id){
        playButton(this.id);
        currentLevel++;
        if(currentLevel === level){
            currentLevel = 0;
            setTimeout(nextSequence, 500);
        }    
    }
    else{
        gameOver();
    } 
});

$(document).keydown(function(event){
    if(gameInProgress === false){
        gameInProgress = true;
        nextSequence();
    }      
});
