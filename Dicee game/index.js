let dicee1 = document.querySelector(".img1");
let dicee2 = document.querySelector(".img2");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

dicee1.setAttribute("src", "images/dice"+randomNumber1+".png");
dicee2.setAttribute("src", "images/dice"+randomNumber2+".png")

let conditionLabel = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    conditionLabel.textContent = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    conditionLabel.textContent = "Player 2 Wins!";
}
else if(randomNumber1 === randomNumber2){
    conditionLabel.textContent = "Draw!";
}