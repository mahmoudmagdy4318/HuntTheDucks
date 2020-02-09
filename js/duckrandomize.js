$(document).ready(function () {
    animateDuckRandomly("#duck");

});
randomPoint = [10, 100, 200, 300, 400, 500, 510, 520, 530];
// randomPointForSecondDuck = [530, 500, 400, 300, 100, 200, 50, 600, 10];
var randomNumberForRight = Math.floor(Math.random() * 10);
var randomNumberForCenter = Math.floor(Math.random() * 10);
var randomNumberForLeft = Math.floor(Math.random() * 10);
rightToLeft = false;



function animateDuckRandomly(duckObject) {
    if (rightToLeft == false) {
        $(duckObject).removeClass("flipClass");
        $(duckObject).animate({ top: randomPoint[randomNumberForLeft], left: "-100px" }, 200);
        $(duckObject).animate({ top: randomPoint[randomNumberForCenter], left: "800px" }, 3000);
        $(duckObject).animate({ top: randomPoint[randomNumberForRight], left: "2500px" }, 4000);
        rightToLeft = true;
    } else {
        $(duckObject).addClass("flipClass");
        $(duckObject).animate({ top: randomPoint[randomNumberForRight], left: "2500px" }, 200);
        $(duckObject).animate({ top: randomPoint[randomNumberForCenter], left: "800px" }, 3000);
        $(duckObject).animate({ top: randomPoint[randomNumberForLeft], left: "-100px" }, 4000);
        rightToLeft = false;
    }
};