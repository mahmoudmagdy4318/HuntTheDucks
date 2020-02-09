import { Duck } from "./magdy.js";

// $(document).ready(function () {

    // duckObject=$("#duck");
    $("#startbtn").on("click", animateDuckRandomly);

// });
// let randomPoint = [10, 100, 200, 300, 400, 500, 510, 520, 530];
// randomPointForSecondDuck = [530, 500, 400, 300, 100, 200, 50, 600, 10];


let rightToLeft = false;



function animateDuckRandomly() {
//ducks sounds
let ducksSound = document.getElementsByClassName("ducksBackground")[0];
ducksSound.loop=true; 
ducksSound.play();
/////////////
    $("#startbtn").css("display","none");
        setInterval(function () {
        let randomPoint = [];
        for (let i = 0; i < 100; i++) {
            randomPoint.push(Math.floor(Math.random() * 600));
        }
        let newObject = new Duck("red");
        let duckObject = newObject.createDuck();
        $("#playground").append(duckObject);
        $(duckObject).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-100" }, 500);
        $(duckObject).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)]}, 5000);
        $(duckObject).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 6000);
        // let newObject2 = new Duck("red");
        // let duckObject2 = newObject2.createDuck();
        // // $(".Duck img").addClass("flipClass");  
        // $(duckObject2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "2500px" }, 500);
        // $(duckObject2).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: randomPoint[Math.floor(Math.random() * 100)]}, 5000);
        // $(duckObject).animate({ top: randomPoint[Math.floor(Math.random() * 100)], left: "-100" }, 6000);

    }, 5000);

    //  } else {
        //     $(duckObject).addClass("flipClass");
        //     $(duckObject).animate({ top: randomPoint[randomNumberForRight], left: "2500px" }, 2000);
        //     $(duckObject).animate({ top: randomPoint[randomNumberForCenter], left: "800px" }, 3000);
        //     $(duckObject).animate({ top: randomPoint[randomNumberForLeft], left: "-100px" }, 4000);
        //     rightToLeft = false;
        // }
};