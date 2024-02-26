let points = 0;
let increase = 1;
let kaiLevel = 0;
let assistlevel = 0;

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
            document.getElementById("clickStat").textContent = increase + " Points/Click";
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
            document.getElementById("clickStat").textContent = increase + " Points/Click";
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
            document.getElementById("kaiCost").textContent = "300 Points";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
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
            document.getElementById("kaiCost").textContent = "500 Points";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
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
            document.getElementById("kaiCost").textContent = "900 Points";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
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
            document.getElementById("kaiCost").textContent = "1400 Points";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
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
            document.getElementById("kaiName").textContent = "-Reaction Kai-";
            document.getElementById("kaiCost").textContent = "2200 Points";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
        }
        return
    }

    if (kaiLevel == 7) {
        if (points >= 2200) {
            points = points - 2200;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/9Reaction.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Gaming Kai-";
            document.getElementById("kaiCost").textContent = "3150 Points";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
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
            document.getElementById("kaiName").textContent = "-Mememax Kai-";
            document.getElementById("kaiCost").textContent = "4500 Points";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
        }
        return
    }
    
    if (kaiLevel == 9) {
        if (points >= 4500) {
            points = points - 4500;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/11Meme.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Junkrat Kai-";
            document.getElementById("kaiCost").textContent = "6050 Points";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
        }
        return
    }

    if (kaiLevel == 10) {
        if (points >= 6050) {
            points = points - 6050;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/12Junkrat.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Joker Kai-";
            document.getElementById("kaiCost").textContent = "7800 Points";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
        }
        return
    }

    if (kaiLevel == 11) {
        if (points >= 7800) {
            points = points - 7800;
            increase += 1;
            kaiLevel += 1;

            document.getElementById("clicker").src = "images/Kais/13Joker.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("kaiName").textContent = "-Ganyu Kai-";
            document.getElementById("kaiCost").textContent = "Infinity";
            document.getElementById("clickStat").textContent = increase + " Points/Click";
        }
        return
    }
}; 

function assistgrade() {
    if (assistlevel == 0) {
        if (points >= 50) {
            points -= 50;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left1.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Wifi Router-";
            document.getElementById("assistCost").textContent = "100 Points";
            document.getElementById("assistStat").textContent = "1 Clicks/15 Seconds";

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio1 = document.createElement('audio');
                audio1.src = "audio/among.mp3";
                document.body.appendChild(audio1);
                audio1.play();

                audio1.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 1) {
        if (points >= 100) {
            points -= 100;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left2.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Subaru WRX STI-";
            document.getElementById("assistCost").textContent = "150 Points";
            document.getElementById("assistStat").textContent = "2 Clicks/15 Seconds";
            
            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio2 = document.createElement('audio');
                audio2.src = "audio/lag.mp3";
                document.body.appendChild(audio2);
                audio2.play();

                audio2.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 2) {
        if (points >= 150) {
            points -= 150;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left3.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Sharkchip666-";
            document.getElementById("assistCost").textContent = "200 Points";
            document.getElementById("assistStat").textContent = "3 Clicks/15 Seconds";
            
            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio3 = document.createElement('audio');
                audio3.src = "audio/WRX.mp3";
                document.body.appendChild(audio3);
                audio3.play();

                audio3.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 3) {
        if (points >= 200) {
            points -= 200;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left4.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Fries Man-";
            document.getElementById("assistCost").textContent = "250 Points";
            document.getElementById("assistStat").textContent = "4 Clicks/15 Seconds";
            
            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio4 = document.createElement('audio');
                audio4.src = "audio/oof.mp3";
                document.body.appendChild(audio4);
                audio4.play();

                audio4.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 4) {
        if (points >= 250) {
            points -= 250;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left5.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Kirbo-";
            document.getElementById("assistCost").textContent = "300 Points";
            document.getElementById("assistStat").textContent = "5 Clicks/15 Seconds";
            
            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio5 = document.createElement('audio');
                audio5.src = "audio/mcdonalds.mp3";
                document.body.appendChild(audio5);
                audio5.play();

                audio5.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }
};