import { Duck } from "./magdy.js";


$("#startbtn").on("click", animateDuckRandomly);
function animateDuckRandomly() {
    $("#startbtn").css("display", "none");
    let randomPoint = [];
    for (let i = 0; i < 100; i++) {
        randomPoint.push(Math.floor(Math.random() * 600));
    }
    setInterval(function () {
        let newObject = new Duck("red");
        let duckObject = newObject.createDuck();
        $("#playground").append(duckObject);
        $(duckObject).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-100" }, 500);
        // $(duckObject).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)] }, 5000);
        $(duckObject).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 6000);
        let newObject2 = new Duck("red");
        let duckObject2 = newObject2.createDuck();
        $("#playground").append(duckObject2);
        $(duckObject2).css("left","2500px");
        $(duckObject2).addClass("flipClass");
        $(duckObject2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 500);
        $(duckObject2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-100" }, 6000);
        
    }, 2000);
};