import { Duck, Bomb, gameState } from "./magdy.js";

///// 

let playername = localStorage.getItem("username");
let level = localStorage.getItem("level");
let username = localStorage.getItem("username");
let scoresArr2 = JSON.parse(localStorage.getItem(`id ${playername} ${level}`))["scores"];
$("#HighScoreRes").text(scoresArr2);
$("#usernameplace").text(username.substring(0, 7).toUpperCase());


let redInterval, goldInterval, blackInterval;
let speed1, speed2, speed3;
if (level == "easylevel") {
    speed1 = 500;
    speed2 = 5000;
    speed3 = 6000;
    redInterval = 5000;
    goldInterval = 12000;
    blackInterval = 14000;
} else {
    speed1 = 500;
    speed2 = 3000;
    speed3 = 2000;
    redInterval = 7000;
    goldInterval = 20000;
    blackInterval = 9000;
}


//////////////////////
$("#startbtn").on("click", function() {
    $("#startbtn").css("display", "none");
    playDucksSound();
    animateRedDuckRandomly();
    animateGoldDuckRandomly();
    animateBlackDuckRandomly();
    createBombRandomly();
    move();
    showModal();
    if (level == "hardlevel") {
        changeBackground();
        changeCursor();
    }
});

function changeBackground() {
    document.getElementById("gamepage").style.backgroundImage = "url('../gallery/dark_mode.jpg')";
}

function changeCursor() {
    setTimeout(function() {
        document.getElementById("gamepage").style.cursor = "url('../gallery/sniperwhite.png'), auto";
    }, 30000);
}

let randomPoint = [];
let i = 0;
let gameEnd = false;
for (let i = 0; i < 100; i++) {
    randomPoint.push(Math.floor(Math.random() * 600));
}

function playDucksSound() {
    let ducksSound = document.getElementsByClassName("ducksBackground")[0];
    ducksSound.loop = true;
    ducksSound.play();
}

function animateRedDuckRandomly() {

    setInterval(function() {
        if (gameEnd == false && gameState == false) {
            let newObject = new Duck("red");
            let redDuck = newObject.createDuck();
            $("#playground").append(redDuck);
            $(redDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, speed1);
            $(redDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, speed2);
            $(redDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, speed3, function() {

                $(redDuck).remove();
            });
            let newObject2 = new Duck("red");
            let redDuck2 = newObject2.createDuck();
            $("#playground").append(redDuck2);
            $(redDuck2).css("left", "2500px");
            $(redDuck2).addClass("flipClass");
            $(redDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, speed1);
            $(redDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, speed2);
            $(redDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, speed3, function() {
                $(redDuck2).remove();
            });
            console.log(gameEnd);
            
        } else {
            stopTimeout();
        }
    }, redInterval);
};


function animateBlackDuckRandomly() {
    setInterval(function() {
        if (gameEnd == false && gameState == false) {
            let newObject3 = new Duck("black");
            let blackDuck = newObject3.createDuck();
            $("#playground").append(blackDuck);
            $(blackDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, speed1);
            $(blackDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, speed2);
            $(blackDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, speed3, function() {
                $(blackDuck).remove();
            });

            let newObject4 = new Duck("black");
            let blackDuck2 = newObject4.createDuck();
            $("#playground").append(blackDuck2);
            $(blackDuck2).css("left", "2500px");
            $(blackDuck2).addClass("flipClass");
            $(blackDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, speed1);
            $(blackDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, speed2);
            $(blackDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, speed3, function() {
                $(blackDuck2).remove();
            });
        }
    }, blackInterval);
};



function animateGoldDuckRandomly() {
    setInterval(function() {
        if (gameEnd == false && gameState == false) {
            let newObject5 = new Duck("gold");
            let goldDuck = newObject5.createDuck();
            $("#playground").append(goldDuck);
            $(goldDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, speed1);
            $(goldDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, speed2);
            $(goldDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, speed3, function() {
                $(goldDuck).remove();
            });
            let newObject4 = new Duck("gold");
            let goldDuck2 = newObject4.createDuck();
            $("#playground").append(goldDuck2);
            $(goldDuck2).css("left", "2500px");
            $(goldDuck2).addClass("flipClass");
            $(goldDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, speed1);
            $(goldDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, speed2);
            $(goldDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, speed3, function() {
                $(goldDuck2).remove();
            });
        }
    }, goldInterval);
};

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(frame, 1000);
    }

    function frame() {
        if (width >= 300) {
            clearInterval(id);
            i = 0;
        } else {
            if (gameEnd == false && gameState == false) {
                width += 5;
                elem.style.width = width + "px";
                // elem.innerHTML = width + " S";
                if (width >= 150) {
                    $("#myBar").css("background-color", "yellow");
                }
                if (width >= 200) {
                    $("#myBar").css("background-color", "orange");
                }
                if (width >= 250) {
                    $("#myBar").css("background-color", "red");
                }
            }
        }
    }
};

function createBombRandomly() {
    if (level == "hardlevel") {
        setInterval(function() {
            if (gameEnd == false && gameState == false) {
                console.log("there");
                let bomb = new Bomb();
                let createdBomb = bomb.createBomb();
                let randomPos = Math.random() * window.innerWidth * 0.7 - 100;
                $(createdBomb).css({ "margin-left": `${randomPos}px` });
                $("#playground").append(createdBomb);
                $(createdBomb).animate({ top: window.innerHeight }, 7000, function() {
                    $(createdBomb).remove();
                });
            }
        }, 11000);
    }
};


let TO, playerObjj;

function showModal() {
    TO=setTimeout(() => {
        document.getElementById("modal").click();
        if (parseInt($("#HighScoreRes").text()) < parseInt($("#scoreplace").text())) {
            console.log("inside if parse");
            playerObjj = {
                "scores": parseInt($("#scoreplace").text()),
                "level": level
            }
            localStorage.setItem(`id ${playername} ${level}`, JSON.stringify(playerObjj));
        } else {
            playerObjj = {
                "scores": parseInt($("#HighScoreRes").text()),
                "level": level
            }
            localStorage.setItem(`id ${playername} ${level}`, JSON.stringify(playerObjj));
        }
        console.log(localStorage.getItem(`id ${playername} ${level}`));

        let scores = JSON.parse(localStorage.getItem(`id ${playername} ${level}`))["scores"];
        $("#HighScoreRes").text(scores);

        gameEnd = true;
        $("#playground span").remove();
        document.getElementsByClassName("ducksBackground")[0].pause();
    }, 60000);
}



function stopTimeout() {
    clearTimeout(TO);
}


$(".modal-footer :first").on("click", function() {
    location.reload();
});

$(".modal-footer :last").on("click", function() {
    window.location.href = "../pg1.html";
});