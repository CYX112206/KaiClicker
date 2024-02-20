let points = 0;
let increase = 1;
let kaiLevel = 0;

function pointUp() {
    points += increase;
    let pointTxt = document.getElementById("pointCounter");
    pointTxt.textContent = points + " Points";
    
    var audio = document.createElement('audio');
    audio.src = "audio/vineboom.mp3";
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
        return
    }

    if (kaiLevel == 1) {
        if (points >= 100) {
            points = points - 100;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/3Blue.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Rainbow Kai-";
            document.getElementById("kaiCost").textContent = "200 Points";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 2) {
        if (points >= 200) {
            points = points - 200;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/4Rainbow.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Nega Kai-";
            document.getElementById("kaiCost").textContent = "300";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 3) {
        if (points >= 300) {
            points = points - 300;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/5Nega.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Deepfried Kai-";
            document.getElementById("kaiCost").textContent = "500";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 4) {
        if (points >= 500) {
            points = points - 500;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/6Deepfried.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Abstract Kai-";
            document.getElementById("kaiCost").textContent = "900";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 5) {
        if (points >= 900) {
            points = points - 900;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/7Abstract.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Balloon Kai-";
            document.getElementById("kaiCost").textContent = "1400";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 6) {
        if (points >= 1400) {
            points = points - 1400;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/8Balloon.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Maid Kai-";
            document.getElementById("kaiCost").textContent = "2200";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 7) {
        if (points >= 2200) {
            points = points - 2200;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/9Maid.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Gaming Kai-";
            document.getElementById("kaiCost").textContent = "3150";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 8) {
        if (points >= 3150) {
            points = points - 3150;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/10Gaming.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Reaction Kai-";
            document.getElementById("kaiCost").textContent = "4500";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 9) {
        if (points >= 4500) {
            points = points - 4500;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/11Reaction.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Mememax Kai-";
            document.getElementById("kaiCost").textContent = "6050";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }
    
    if (kaiLevel == 10) {
        if (points >= 6050) {
            points = points - 6050;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/12Meme.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Junkrat Kai-";
            document.getElementById("kaiCost").textContent = "7800";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 11) {
        if (points >= 7800) {
            points = points - 7800;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/13Junkrat.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Joker Kai-";
            document.getElementById("kaiCost").textContent = "10000";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }

    if (kaiLevel == 12) {
        if (points >= 10000) {
            points = points - 10000;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/14Joker.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Ganyu Kai-";
            document.getElementById("kaiCost").textContent = "Infinity";
            document.getElementById("clickStat").textContent = "Points/Click: " + increase;
        }
        return
    }
}