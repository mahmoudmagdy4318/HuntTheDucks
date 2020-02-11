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
                this.imageSrc = "../gallery/goldenDuck.gif";
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
        let dogObject = $(`<span class="Dog"><img src="gallery/dog.png"></span>`);
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
                this.imageSrc = "../gallery/duck-left.jpg";
                break;
            case "black":
                this.imageSrc = "gallery/blackDuck.png";
                break;
            case "gold":
                this.imageSrc = "gallery/goldenDuck.png";
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

class ExplodedBomb {
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

$(".exit").on("click", function() {
    window.close();
})
$("#exit").on("click", function() {
    $("#")
    window.location.href = "../pg1.html";
});

//shooting 

let duckSound = document.getElementsByClassName("ducks")[0];
let score = 0;
$("#playground").on("click", function(event) {
    if (event.target.src == "http://127.0.0.1:5500/gallery/duck.gif") {
        duckSound.play();
        let currentDuck = event.target;
        let diedone = new DiedDuck("red", currentDuck.x - 100, currentDuck.y).createDiedDuck();
        currentDuck.remove();
        $("#playground").append(diedone);
        $(diedone).animate({ top: "1200px" }, 2000);
        score += 10;
        $("#scoreplace").text(score);
    }
    if(event.target.src=="http://127.0.0.1:5500/gallery/goldenduck.gif"){
        duckSound.play();
        let currentDuck = event.target;
        let diedone = new DiedDuck("gold", currentDuck.x - 100, currentDuck.y).createDiedDuck();
        currentDuck.remove();
        $("#playground").append(diedone);
        $(diedone).animate({ top: "1200px" }, 2000);
        score += 50;
        $("#scoreplace").text(score);
    }
    if(event.target.src=="http://127.0.0.1:5500/gallery/blackDuck.gif"){
        duckSound.play();
        let currentDuck = event.target;
        let diedone = new DiedDuck("gold", currentDuck.x - 100, currentDuck.y).createDiedDuck();
        currentDuck.remove();
        $("#playground").append(diedone);
        $(diedone).animate({ top: "1200px" }, 2000);
        score -= 50;
        $("#scoreplace").text(score);
    }
    if(event.target.src=="http://127.0.0.1:5500/gallery/source.gif"){
        let bomb = event.target;
        let explodedbomb=new ExplodedBomb(bomb.x,bomb.y).createExplodedBomb();
        $("#playground").append(explodedbomb);
        bomb.remove();
        $(explodedbomb).fadeOut(2000);
        $("#playground img").click();        
    }
     
})

export { Duck, Bomb };