import { Duck } from "./magdy.js";

$("#startbtn").on("click", animateRedDuckRandomly);
document.getElementById("startbtn").addEventListener("click", animateBlackDuckRandomly);
document.getElementById("startbtn").addEventListener("click", animateGoldDuckRandomly);
document.getElementById("startbtn").addEventListener("click", move);
let randomPoint = [];
let i=0;
for (let i = 0; i < 100; i++) {
    randomPoint.push(Math.floor(Math.random() * 600));
}
function animateRedDuckRandomly() {

    console.log("hi");

    //ducks sounds
    // let ducksSound = document.getElementsByClassName("ducksBackground")[0];
    // ducksSound.loop=true; 
    // ducksSound.play();
    /////////////

    $("#startbtn").css("display", "none");

    setInterval(function () {
        let newObject = new Duck("red");
        let redDuck = newObject.createDuck();
        $("#playground").append(redDuck);
        $(redDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, 500);
        $(redDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, 5000);
        $(redDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 6000, function () {
            $(redDuck).remove();
        });
        let newObject2 = new Duck("red");
        let redDuck2 = newObject2.createDuck();
        $("#playground").append(redDuck2);
        $(redDuck2).css("left", "2500px");
        $(redDuck2).addClass("flipClass");
        $(redDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 500);
        $(redDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, 5000);
        $(redDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, 6000, function () {
            $(redDuck2).remove();
        });



    }, 3000);
};


function animateBlackDuckRandomly() {
    setInterval(function () {
        let newObject3 = new Duck("black");
        let blackDuck = newObject3.createDuck();
        $("#playground").append(blackDuck);
        $(blackDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, 500);
        $(blackDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, 5000);
        $(blackDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 6000, function () {
            $(blackDuck).remove();
        });

        let newObject4 = new Duck("black");
        let blackDuck2 = newObject4.createDuck();
        $("#playground").append(blackDuck2);
        $(blackDuck2).css("left", "2500px");
        $(blackDuck2).addClass("flipClass");
        $(blackDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 500);
        $(blackDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, 5000);
        $(blackDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, 6000, function () {
            $(blackDuck2).remove();
        });
    }, 5000);
};



function animateGoldDuckRandomly() {
    setInterval(function () {
        let newObject5 = new Duck("gold");
        let goldDuck = newObject5.createDuck();
        $("#playground").append(goldDuck);
        $(goldDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, 500);
        $(kDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, 5000);
        $(goldDuck).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 6000, function () {
            $(goldDuck).remove();
        });
        let newObject4 = new Duck("gold");
        let goldDuck2 = newObject4.createDuck();
        $("#playground").append(goldDuck2);
        $(goldDuck2).css("left", "2500px");
        $(goldDuck2).addClass("flipClass");
        $(goldDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 500);
        $(goldDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, 5000);
        $(goldDuck2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-400" }, 6000, function () {
            $(goldDuck2).remove();
        });
    }, 10000);
};


function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(frame, 1200);
    }
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
            // elem.innerHTML = width + " S";
        }
    }
}