class Duck { //class for creating ducks
    constructor(duckColor) {
        this.duckColor = duckColor;
        switch (this.duckColor) {
            case "red":
                this.imageSrc = "../gallery/duck.gif" //"gallery/redDuck.png";
                break;
            case "black":
                this.imageSrc = "../gallery/blackDuck.gif";
                break;
            case "gold":
                this.imageSrc = "../gallery/goldenduck.gif";
                break;
        }
    }
    createDuck() {
        let duckObject = $(`<span class="Duck"><img src=${this.imageSrc}></span>`);
        return duckObject;
    }
}

class Dog { //class for creating the dog
    createDog() {
        let dogObject = $(`<span class="Dog"><img src="../gallery/dog.png"></span>`);
        return dogObject;
    }
}

class Bomb { //class for creating the bomb
    createBomb() {
        let bombObject = $(`<span class="Bomb"><img src="gallery/source.gif"></span>`);
        return bombObject;
    }
}

class DiedDuck { //class for creating died ducks
    constructor(duckColor, x, y) {
        this.diedDuckColor = duckColor;
        switch (this.diedDuckColor) {
            case "red":
                this.imageSrc = "../gallery/duck-left.png";
                break;
            case "black":
                this.imageSrc = "../gallery/blackDuck.png";
                break;
            case "gold":
                this.imageSrc = "../gallery/goldenDuck.png";
                break;
        }
        this.left = x;
        this.top = y;
    }

    createDiedDuck() {
        let diedDuck = $(`<span class="DiedDuck"><img src=${this.imageSrc}></span>`);
        diedDuck.css({ top: this.top, left: this.left });
        return diedDuck;
    }
}

class ExplodedBomb { //class to make the bombs after exploding objects
    constructor(x,y){
        this.left=x;
        this.top=y;
    }
    createExplodedBomb() {
        let explodedBombObject = $(`<span><img src="gallery/ExplodedBomb.png"></span>`);
        explodedBombObject.css({ top: this.top, left: this.left });
        return explodedBombObject;
    }
}

// adding audio

let sound = document.getElementsByClassName("main_theme")[0];
sound.loop = false;

function playAudio() {
    if (sound.loop != true) {
        sound.play();
        $(".volume").attr("src", "gallery/soundoff.png");
        sound.loop = true;
    } else {
        sound.pause();
        $(".volume").attr("src", "gallery/sound.png");
        sound.loop = false;
    }
}

//sound and exit buutons

$(".volume").on("click", playAudio);


$("#exit").on("click", function() {
    window.location.href = "../Home.html";
});

//dog animation
let dog= new Dog().createDog();
$("#playground").append(dog);
function animateDog(){
    $(dog).animate({top:"420px"},1000);
    $(dog).animate({top:"580px"},1000);
}


//shooting 

let duckSound = document.getElementsByClassName("ducks")[0];   //ducks on click sound
let bombSound = document.getElementsByClassName("bombs")[0];   //bombs onclick sound
let score = 0;
let ducksCount=0;
let gameState=false;    //flag to check if the player has won or not it becomes true if he wins
$("#playground").on("click", function(event) {
    if (event.target.src == "http://127.0.0.1:5500/gallery/duck.gif") {         //red duck onclick actions
        duckSound.play();
        animateDog();
        let currentDuck = event.target;
        let diedone = new DiedDuck("red", currentDuck.x - 100, currentDuck.y).createDiedDuck();
        currentDuck.remove();
        $("#playground").append(diedone);
        $(diedone).animate({ top: "1200px" }, 2000,function() {
            $(diedone).remove();
        });
        score += 5;
        ducksCount++;
        $("#scoreplace").text(score);
        $("#ducksCount").text(ducksCount);
        if(ducksCount==20){
            document.getElementById("modal").click();
            gameState=true;
            $("#playground span").remove();
            document.getElementsByClassName("ducksBackground")[0].pause();
            $(".modal-title").text("GREAT!");
        }
    }
    else if(event.target.src=="http://127.0.0.1:5500/gallery/goldenduck.gif"){ //goldenduck onclick actions
        duckSound.play();
        animateDog();
        let currentDuck = event.target;
        let diedone = new DiedDuck("gold", currentDuck.x - 100, currentDuck.y).createDiedDuck();
        currentDuck.remove();
        $("#playground").append(diedone);
        $(diedone).animate({ top: "1200px" }, 2000,function() {
            $(diedone).remove();
        });
        score += 10;
        $("#scoreplace").text(score);
        ducksCount++;
        $("#ducksCount").text(ducksCount);
        if(ducksCount==20){
            document.getElementById("modal").click();
            gameState=true;
            $("#playground span").remove();
            document.getElementsByClassName("ducksBackground")[0].pause();
            $(".modal-title").text("GREAT!");
        }
    }
    else if(event.target.src=="http://127.0.0.1:5500/gallery/blackDuck.gif"){ //black duck onclick actions
        duckSound.play();
        let currentDuck = event.target;
        let diedone = new DiedDuck("black", currentDuck.x - 100, currentDuck.y).createDiedDuck();
        currentDuck.remove();
        $("#playground").append(diedone);
        $(diedone).animate({ top: "1200px" }, 2000,function() {
            $(diedone).remove();
        });
        score -= 10;
        $("#scoreplace").text(score);
        ducksCount--;
        $("#ducksCount").text(ducksCount);
    }
    else if(event.target.src=="http://127.0.0.1:5500/gallery/source.gif"){ //bomb onclick actions
        let bomb = event.target;
        bombSound.play();
        let explodedbomb=new ExplodedBomb(bomb.x,bomb.y).createExplodedBomb();
        $("#playground").append(explodedbomb);
        bomb.remove();
        $(explodedbomb).fadeOut(2000);
        $("#playground img").click();
        if(ducksCount==20){
            document.getElementById("modal").click();
            gameState=true;
            $("#playground span").remove();
            document.getElementsByClassName("ducksBackground")[0].pause();
            $(".modal-title").text("GREAT!");
        }        
    }
     
})




export { Duck, Bomb, gameState }; //export the gamstate flag to game script to stop the animations if the player wins