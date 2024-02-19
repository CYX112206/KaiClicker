let points = 0;
let increase = 1;

let clickSound = new Audio("audio/yipee.mp3");

function pointUp() {
    points += increase;
    let pointTxt = document.getElementById("pointCounter") ;
    pointTxt.textContent = points + " Points"
    
    clickSound.load();
    clickSound.play();
}