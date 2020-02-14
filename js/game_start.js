import { Duck, Bomb, gameState } from "./classes_Shooting.js";

//data from the localStorge 
let playername = localStorage.getItem("username");
let level = localStorage.getItem("level");
let username = localStorage.getItem("username");
let highScoreNum = JSON.parse(localStorage.getItem(`id ${playername} ${level}`))["scores"];

//setting these data on game screen
$("#HighScoreRes").text(highScoreNum);
$("#usernameplace").text(username.substring(0, 7).toUpperCase());
$("#welcome").text("WELCOME "+username.substring(0, 7).toUpperCase());


//variables change based on the game level

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
    redInterval = 4000;
    goldInterval = 18000;
    blackInterval = 9000;
}


/// start button onclick call these functions
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
    updateScoreColor();
    shotFire();
    removeWelcome();
});

//function to remove the welocme message
function removeWelcome(){
    $("#welcome").remove();
}

//function to apply the dark mode in hard level
function changeBackground() {
    document.getElementById("gamepage").style.backgroundImage = "url('../gallery/dark_mode.jpg')";
}

//function to change the cursor in dark mode
function changeCursor() {
    setTimeout(function() {
        document.getElementById("gamepage").style.cursor = "url('../gallery/sniperwhite.png'), auto";
    }, 30000);
}

//making array of random number to use it in animation  
let randomPoint = [];
let i = 0;
for (let i = 0; i < 100; i++) {
    randomPoint.push(Math.floor(Math.random() * 600));
}
let gameEnd = false; //flag to check for the game still on play or has ended

//function to play the background ducks sound
function playDucksSound() {
    let ducksSound = document.getElementsByClassName("ducksBackground")[0];
    ducksSound.loop = true;
    ducksSound.play();
}
//function to create and animate the red ducks
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


//function to create and animate the black ducks
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


//function to create and animate the glod ducks
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

//function to move the timer bar
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

//function to create animate the bombs
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
document.getElementById("modal").addEventListener("click",updateHighScore);

//function to update the highScores
function updateHighScore(){
    if (parseInt(JSON.parse(localStorage.getItem(`id ${playername} ${level}`))["scores"]) < parseInt($("#scoreplace").text())) {
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

    scores = JSON.parse(localStorage.getItem(`id ${playername} ${level}`))["scores"];
    $("#HighScoreRes").text(scores);
}

//function to show the modal of gameEnd
function showModal() {
    TO=setTimeout(() => {
        $("#gamepage").css("cursor","auto");
        document.getElementById("modal").click();
        gameEnd = true;
        $("#playground span").remove();
        document.getElementsByClassName("ducksBackground")[0].pause();
    }, 60000);
}


//function to clear the timeout of the modal if the player wins
function stopTimeout() {
    clearTimeout(TO);
}

//play again button on click action
$(".modal-footer :first").on("click", function() {
    location.reload();
});

//home button onclick action
$(".modal-footer :last").on("click", function() {
    window.location.href = "../Home.html";
});

//function to change the color of the score and update the high score if the user exceeds the previous highscore
function updateScoreColor(){
    setInterval(function(){
        if (parseInt(JSON.parse(localStorage.getItem(`id ${playername} ${level}`))["scores"]) < parseInt($("#scoreplace").text())) {
            $("#scoreplace").css("color","rgb(155,235,26)");
            $("#HighScoreRes").css("color","rgb(155,235,26)");
            $("#HighScoreRes").text($("#scoreplace").text());
        }
    },500)
    
}

//function to play the sound of the gun on shoot
function shotFire(){
    let gunSound = document.getElementsByClassName("gunShooting")[0];
    $("#playground").on("click",function(){
        gunSound.play();
    })    
}