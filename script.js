let points = 100000;
let increase = 1;
let kaiLevel = 0;
let assistlevel = 0;

function pointUp() {
    points += increase;
    let pointTxt = document.getElementById("pointCounter");
    pointTxt.textContent = points + " Points";
    
    var audio = document.createElement('audio');
    audio.src = "audio/kaiSounds/vineboom.mp3";
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

            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio1 = document.createElement('audio');
            audio1.src = "audio/assistSounds/among.mp3";
            document.body.appendChild(audio1);
            audio1.play();

            audio1.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio1 = document.createElement('audio');
                audio1.src = "audio/assistSounds/among.mp3";
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
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio2 = document.createElement('audio');
            audio2.src = "audio/assistSounds/lag.mp3";
            document.body.appendChild(audio2);
            audio2.play();

            audio2.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio2 = document.createElement('audio');
                audio2.src = "audio/assistSounds/lag.mp3";
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
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio3 = document.createElement('audio');
            audio3.src = "audio/assistSounds/WRX.mp3";
            document.body.appendChild(audio3);
            audio3.play();

            audio3.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio3 = document.createElement('audio');
                audio3.src = "audio/assistSounds/WRX.mp3";
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
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio4 = document.createElement('audio');
            audio4.src = "audio/assistSounds/oof.mp3";
            document.body.appendChild(audio4);
            audio4.play();

            audio4.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio4 = document.createElement('audio');
                audio4.src = "audio/assistSounds/oof.mp3";
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
            document.getElementById("assistName").textContent = "-The Lanyard-";
            document.getElementById("assistCost").textContent = "300 Points";
            document.getElementById("assistStat").textContent = "5 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio5 = document.createElement('audio');
            audio5.src = "audio/assistSounds/mcdonalds.mp3";
            document.body.appendChild(audio5);
            audio5.play();

            audio5.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio5 = document.createElement('audio');
                audio5.src = "audio/assistSounds/mcdonalds.mp3";
                document.body.appendChild(audio5);
                audio5.play();

                audio5.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 5) {
        if (points >= 300) {
            points -= 300;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left6.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Kirbo-";
            document.getElementById("assistCost").textContent = "350 Points";
            document.getElementById("assistStat").textContent = "6 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio6 = document.createElement('audio');
            audio6.src = "audio/assistSounds/whip.mp3";
            document.body.appendChild(audio6);
            audio6.play();

            audio6.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio6 = document.createElement('audio');
                audio6.src = "audio/assistSounds/whip.mp3";
                document.body.appendChild(audio6);
                audio6.play();

                audio6.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 6) {
        if (points >= 350) {
            points -= 350;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left7.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Sans-";
            document.getElementById("assistCost").textContent = "400 Points";
            document.getElementById("assistStat").textContent = "7 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio7 = document.createElement('audio');
            audio7.src = "audio/assistSounds/poyo.mp3";
            document.body.appendChild(audio7);
            audio7.play();

            audio7.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio7 = document.createElement('audio');
                audio7.src = "audio/assistSounds/poyo.mp3";
                document.body.appendChild(audio7);
                audio7.play();

                audio7.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 7) {
        if (points >= 400) {
            points -= 400;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left8.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Tack Shooter-";
            document.getElementById("assistCost").textContent = "450 Points";
            document.getElementById("assistStat").textContent = "8 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio8 = document.createElement('audio');
            audio8.src = "audio/assistSounds/balls.mp3";
            document.body.appendChild(audio8);
            audio8.play();

            audio8.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio8 = document.createElement('audio');
                audio8.src = "audio/assistSounds/balls.mp3";
                document.body.appendChild(audio8);
                audio8.play();

                audio8.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 8) {
        if (points >= 450) {
            points -= 450;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left9.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Regice-";
            document.getElementById("assistCost").textContent = "500 Points";
            document.getElementById("assistStat").textContent = "9 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio9 = document.createElement('audio');
            audio9.src = "audio/assistSounds/pops.mp3";
            document.body.appendChild(audio9);
            audio9.play();

            audio9.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio9 = document.createElement('audio');
                audio9.src = "audio/assistSounds/pops.mp3";
                document.body.appendChild(audio9);
                audio9.play();

                audio9.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 9) {
        if (points >= 500) {
            points -= 500;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left10.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Ramlethal Valentine-";
            document.getElementById("assistCost").textContent = "550 Points";
            document.getElementById("assistStat").textContent = "10 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio10 = document.createElement('audio');
            audio10.src = "audio/assistSounds/regi.mp3";
            document.body.appendChild(audio10);
            audio10.play();

            audio10.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio10 = document.createElement('audio');
                audio10.src = "audio/assistSounds/regi.mp3";
                document.body.appendChild(audio10);
                audio10.play();

                audio10.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 10) {
        if (points >= 550) {
            points -= 550;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left11.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Mariachi Raiden-";
            document.getElementById("assistCost").textContent = "600 Points";
            document.getElementById("assistStat").textContent = "11 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio11 = document.createElement('audio');
            audio11.src = "audio/assistSounds/hamburger.mp3";
            document.body.appendChild(audio11);
            audio11.play();

            audio11.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio11 = document.createElement('audio');
                audio11.src = "audio/assistSounds/hamburger.mp3";
                document.body.appendChild(audio11);
                audio11.play();

                audio11.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 11) {
        if (points >= 600) {
            points -= 600;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left12.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Akira Nishikiyama-";
            document.getElementById("assistCost").textContent = "650 Points";
            document.getElementById("assistStat").textContent = "12 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio12 = document.createElement('audio');
            audio12.src = "audio/assistSounds/raiden.mp3";
            document.body.appendChild(audio12);
            audio12.play();

            audio12.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio12 = document.createElement('audio');
                audio12.src = "audio/assistSounds/raiden.mp3";
                document.body.appendChild(audio12);
                audio12.play();

                audio12.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 12) {
        if (points >= 650) {
            points -= 650;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left13.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Red Spy-";
            document.getElementById("assistCost").textContent = "700 Points";
            document.getElementById("assistStat").textContent = "13 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio13 = document.createElement('audio');
            audio13.src = "audio/assistSounds/joint.mp3";
            document.body.appendChild(audio13);
            audio13.play();

            audio13.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio13 = document.createElement('audio');
                audio13.src = "audio/assistSounds/joint.mp3";
                document.body.appendChild(audio13);
                audio13.play();

                audio13.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 13) {
        if (points >= 700) {
            points -= 700;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left14.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Cypher-";
            document.getElementById("assistCost").textContent = "750 Points";
            document.getElementById("assistStat").textContent = "14 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio14 = document.createElement('audio');
            audio14.src = "audio/assistSounds/mother.mp3";
            document.body.appendChild(audio14);
            audio14.play();

            audio14.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio14 = document.createElement('audio');
                audio14.src = "audio/assistSounds/mother.mp3";
                document.body.appendChild(audio14);
                audio14.play();

                audio14.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 14) {
        if (points >= 750) {
            points -= 750;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left15.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Lennox Rose-";
            document.getElementById("assistCost").textContent = "800 Points";
            document.getElementById("assistStat").textContent = "15 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio15 = document.createElement('audio');
            audio15.src = "audio/assistSounds/cypher.mp3";
            document.body.appendChild(audio15);
            audio15.play();

            audio15.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio15 = document.createElement('audio');
                audio15.src = "audio/assistSounds/cypher.mp3";
                document.body.appendChild(audio15);
                audio15.play();

                audio15.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 15) {
        if (points >= 800) {
            points -= 800;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left16.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Fish Thicc-";
            document.getElementById("assistCost").textContent = "850 Points";
            document.getElementById("assistStat").textContent = "16 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio16 = document.createElement('audio');
            audio16.src = "audio/assistSounds/griddy.mp3";
            document.body.appendChild(audio16);
            audio16.play();

            audio16.onended = function () {   this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio16 = document.createElement('audio');
                audio16.src = "audio/assistSounds/griddy.mp3";
                document.body.appendChild(audio16);
                audio16.play();

                audio16.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 16) {
        if (points >= 850) {
            points -= 850;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left17.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Eminem-";
            document.getElementById("assistCost").textContent = "900 Points";
            document.getElementById("assistStat").textContent = "17 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio17 = document.createElement('audio');
            audio17.src = "audio/assistSounds/fishthicc.mp3";
            document.body.appendChild(audio17);
            audio17.play();

            audio17.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio17 = document.createElement('audio');
                audio17.src = "audio/assistSounds/fishthicc.mp3";
                document.body.appendChild(audio17);
                audio17.play();

                audio17.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 17) {
        if (points >= 900) {
            points -= 900;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left18.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Winton-";
            document.getElementById("assistCost").textContent = "950 Points";
            document.getElementById("assistStat").textContent = "18 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio18 = document.createElement('audio');
            audio18.src = "audio/assistSounds/slimshady.mp3";
            document.body.appendChild(audio18);
            audio18.play();

            audio18.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio18 = document.createElement('audio');
                audio18.src = "audio/assistSounds/slimshady.mp3";
                document.body.appendChild(audio18);
                audio18.play();

                audio18.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 18) {
        if (points >= 950) {
            points -= 950;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left19.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Ramattra-";
            document.getElementById("assistCost").textContent = "1000 Points";
            document.getElementById("assistStat").textContent = "19 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio19 = document.createElement('audio');
            audio19.src = "audio/assistSounds/ohyeah.mp3";
            document.body.appendChild(audio19);
            audio19.play();

            audio18.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio19 = document.createElement('audio');
                audio19.src = "audio/assistSounds/ohyeah.mp3";
                document.body.appendChild(audio19);
                audio19.play();

                audio19.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 19) {
        if (points >= 1000) {
            points -= 1000;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left20.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Morgana-";
            document.getElementById("assistCost").textContent = "1100 Points";
            document.getElementById("assistStat").textContent = "20 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio20 = document.createElement('audio');
            audio20.src = "audio/assistSounds/suffer.mp3";
            document.body.appendChild(audio20);
            audio20.play();

            audio20.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio20 = document.createElement('audio');
                audio20.src = "audio/assistSounds/suffer.mp3";
                document.body.appendChild(audio20);
                audio20.play();

                audio20.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 20) {
        if (points >= 1100) {
            points -= 1100;
            assistlevel += 1;

            document.getElementById("left").src = "images/Assists/left21.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-HDMI 3-";
            document.getElementById("assistCost").textContent = "1200 Points";
            document.getElementById("assistStat").textContent = "21 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio21 = document.createElement('audio');
            audio21.src = "audio/assistSounds/cool.mp3";
            document.body.appendChild(audio21);
            audio21.play();

            audio21.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio21 = document.createElement('audio');
                audio21.src = "audio/assistSounds/cool.mp3";
                document.body.appendChild(audio21);
                audio21.play();

                audio21.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 21) {
        if (points >= 1200) {
            points -= 1200;
            assistlevel += 1;

            document.getElementById("right").src = "images/Assists/right1.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-The Entire Singapore Polytechnic-";
            document.getElementById("assistCost").textContent = "1300 Points";
            document.getElementById("assistStat").textContent = "22 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio22 = document.createElement('audio');
            audio22.src = "audio/assistSounds/freeze.mp3";
            document.body.appendChild(audio22);
            audio22.play();

            audio22.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio22 = document.createElement('audio');
                audio22.src = "audio/assistSounds/freeze.mp3";
                document.body.appendChild(audio22);
                audio22.play();

                audio22.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 22) {
        if (points >= 1300) {
            points -= 1300;
            assistlevel += 1;

            document.getElementById("right").src = "images/Assists/right2.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Noir Vesper-";
            document.getElementById("assistCost").textContent = "1400 Points";
            document.getElementById("assistStat").textContent = "23 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio23 = document.createElement('audio');
            audio23.src = "audio/assistSounds/kys.mp3";
            document.body.appendChild(audio23);
            audio23.play();

            audio23.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio23 = document.createElement('audio');
                audio23.src = "audio/assistSounds/kys.mp3";
                document.body.appendChild(audio23);
                audio23.play();

                audio23.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 23) {
        if (points >= 1400) {
            points -= 1400;
            assistlevel += 1;

            document.getElementById("right").src = "images/Assists/right3.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Filian-";
            document.getElementById("assistCost").textContent = "1500 Points";
            document.getElementById("assistStat").textContent = "24 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio24 = document.createElement('audio');
            audio24.src = "audio/assistSounds/vesper.mp3";
            document.body.appendChild(audio24);
            audio24.play();

            audio24.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio24 = document.createElement('audio');
                audio24.src = "audio/assistSounds/vesper.mp3";
                document.body.appendChild(audio24);
                audio24.play();

                audio24.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 24) {
        if (points >= 1500) {
            points -= 1500;
            assistlevel += 1;

            document.getElementById("right").src = "images/Assists/right4.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Freddy Fazbear-";
            document.getElementById("assistCost").textContent = "1600 Points";
            document.getElementById("assistStat").textContent = "25 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio25 = document.createElement('audio');
            audio25.src = "audio/assistSounds/filian.mp3";
            document.body.appendChild(audio25);
            audio25.play();

            audio25.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio25 = document.createElement('audio');
                audio25.src = "audio/assistSounds/filian.mp3";
                document.body.appendChild(audio25);
                audio25.play();

                audio25.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 25) {
        if (points >= 1600) {
            points -= 1600;
            assistlevel += 1;

            document.getElementById("right").src = "images/Assists/right5.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-MatPat-";
            document.getElementById("assistCost").textContent = "1700 Points";
            document.getElementById("assistStat").textContent = "26 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio26 = document.createElement('audio');
            audio26.src = "audio/assistSounds/fazbear.mp3";
            document.body.appendChild(audio26);
            audio26.play();

            audio26.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio26 = document.createElement('audio');
                audio26.src = "audio/assistSounds/fazbear.mp3";
                document.body.appendChild(audio26);
                audio26.play();

                audio26.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 26) {
        if (points >= 1700) {
            points -= 1700;
            assistlevel += 1;

            document.getElementById("right").src = "images/Assists/right6.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Mr Beast-";
            document.getElementById("assistCost").textContent = "1800 Points";
            document.getElementById("assistStat").textContent = "27 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio27 = document.createElement('audio');
            audio27.src = "audio/assistSounds/theory.mp3";
            document.body.appendChild(audio27);
            audio27.play();

            audio27.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio27 = document.createElement('audio');
                audio27.src = "audio/assistSounds/theory.mp3";
                document.body.appendChild(audio27);
                audio27.play();

                audio27.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 27) {
        if (points >= 1800) {
            points -= 1800;
            assistlevel += 1;

            document.getElementById("right").src = "images/Assists/right7.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-MOYAI GANG-";
            document.getElementById("assistCost").textContent = "1900 Points";
            document.getElementById("assistStat").textContent = "28 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio28 = document.createElement('audio');
            audio28.src = "audio/assistSounds/beast.mp3";
            document.body.appendChild(audio28);
            audio28.play();

            audio28.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio28 = document.createElement('audio');
                audio28.src = "audio/assistSounds/beast.mp3";
                document.body.appendChild(audio28);
                audio28.play();

                audio28.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    if (assistlevel == 28) {
        if (points >= 1900) {
            points -= 1900;
            assistlevel += 1;

            document.getElementById("right").src = "images/Assists/right8.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Amalee-";
            document.getElementById("assistCost").textContent = "2000 Points";
            document.getElementById("assistStat").textContent = "29 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio29 = document.createElement('audio');
            audio29.src = "audio/assistSounds/moyai.mp3";
            document.body.appendChild(audio29);
            audio29.play();

            audio29.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio29 = document.createElement('audio');
                audio29.src = "audio/assistSounds/moyai.mp3";
                document.body.appendChild(audio28);
                audio29.play();

                audio29.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    }

    /* if (assistlevel == 29) {
        if (points >= 2000) {
            points -= 2000;
            assistlevel += 1;

            document.getElementById("right").src = "images/Assists/right9.png";
            document.getElementById("pointCounter").textContent = points + " Points";
            document.getElementById("assistName").textContent = "-Jingliu-";
            document.getElementById("assistCost").textContent = "2100 Points";
            document.getElementById("assistStat").textContent = "30 Clicks/15 Seconds";
            
            points += increase;
            document.getElementById("pointCounter").textContent = points + " Points";
            var audio29 = document.createElement('audio');
            //audio30.src = "audio/assistSounds/moyai.mp3";
            document.body.appendChild(audio29);
            audio29.play();

            audio29.onended = function () {this.parentNode.removeChild(this);}

            setInterval(function(){
                points += increase;
                document.getElementById("pointCounter").textContent = points + " Points";
                var audio29 = document.createElement('audio');
                audio29.src = "audio/assistSounds/moyai.mp3";
                document.body.appendChild(audio28);
                audio29.play();

                audio29.onended = function () {
                this.parentNode.removeChild(this);
                }
            }, 15000);
        }
        return
    } */
};