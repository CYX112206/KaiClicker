let points = 0;
let increase = 1;

function pointUp() {
    points += increase;
    let pointTxt = document.getElementById("pointCounter") ;
    pointTxt.textContent = points + " Points"
    
    var audio = document.createElement('audio');
    audio.src = "audio/yipee.mp3";
    document.body.appendChild(audio);
    audio.play();

    audio.onended = function () {
        this.parentNode.removeChild(this);
    }
}