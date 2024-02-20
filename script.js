let points = 0;
let increase = 1;
let kaiLevel = 0;

function pointUp() {
    points += increase;
    let pointTxt = document.getElementById("pointCounter");
    pointTxt.textContent = points + " Points";
    
    var audio = document.createElement('audio');
    audio.src = "audio/helnaw.mp3";
    document.body.appendChild(audio);
    audio.play();

    audio.onended = function () {
        this.parentNode.removeChild(this);
    }
}

function upgrade() {

    if (kaiLevel == 0) {
        if (points >= 50) {
            points = points - 50;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/2Red.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Blue Kai-";
            document.getElementById("kaiCost").textContent = "100 Points";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
    }

    if (kaiLevel == 1) {
        if (points >= 100) {
            points = points - 100;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/3Blue.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Rainbow Kai-";
            document.getElementById("kaiCost").textContent = "300 Points";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
    }

    if (kaiLevel == 2) {
        if (points >= 300) {
            points = points - 300;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/4Rainbow.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Nega Kai-";
            document.getElementById("kaiCost").textContent = "CODING IN DEVELOPMENT";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
    }
}