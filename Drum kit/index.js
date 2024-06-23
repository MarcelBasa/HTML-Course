function addSoundEvent(letter){
    let audio;
    switch(letter){
            case "w":
                audio = new Audio("sounds/tom-1.mp3");
            break;
            case "a":
                audio = new Audio("sounds/tom-2.mp3");
            break;
            case "s":
                audio = new Audio("sounds/tom-3.mp3");
            break;
            case "d":
                audio = new Audio("sounds/tom-4.mp3");
            break;
            case "j":
                audio = new Audio("sounds/snare.mp3");
            break;
            case "k":
                audio = new Audio("sounds/crash.mp3");
            break;
            case "l":
                audio = new Audio("sounds/kick-bass.mp3");
            break;
    }
    if(audio)
        audio.play();
}

function buttonAnimation(letter) {
    let activeButton = document.querySelector("."+letter);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    },
    150);
}

for(let i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",  function() {
        addSoundEvent(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    addSoundEvent(event.key);
    buttonAnimation(event.key);
});