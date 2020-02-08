class Duck{      //class for creating ducks
    constructor(duckColor){
        this.duckColor=duckColor;
        switch(this.duckColor)
        {
            case "red":
                this.imageSrc="gallery/1.jpg" //"gallery/redDuck.png";
                break;
            case "black":
                this.imageSrc="gallery/blackDuck.png";
                break;
            case "gold":
                this.imageSrc="gallery/goldenDuck.png";
                break;      
        }
    }
    createDuck(){
        let duckObject=$(`<span class="Duck"><img src=${this.imageSrc}></span>`);
        return duckObject;
    }
}

class Dog{   //class for creating the dog
    createDog(){
        let dogObject=$(`<span class="Dog"><img src="gallery/dog.png"></span>`);
        return dogObject; 
    }
}

class Bomb{   //class for creating the bomb
    createBomb(){
        let bombObject=$(`<span class="Bomb"><img src="gallery/Bomb.png"></span>`);
    }
}

class DiedDuck{  //class for creating died ducks
    constructor(duckColor){
        this.diedDuckColor=duckColor;
        switch(this.diedDuckColor)
        {
            case "red":
                this.imageSrc="gallery/1.jpg";
                break;
            case "black":
                this.imageSrc="gallery/blackDuck.png";
                break;
            case "gold":
                this.imageSrc="gallery/goldenDuck.png";
                break;      
        }
    }
    
    createDiedDuck(){
        let diedDuck=$(`<span class="DiedDuck"><img src=${this.imageSrc}></span>`);
        return diedDuck;
    }    
}

class ExplodedBomb{
    createExplodedBomb(){
        let explodedBombObject=$(`<span class="Bomb"><img src="gallery/ExplodedBomb.png"></span>`);
    }
}

// adding audio

let sound = document.getElementsByClassName("main_theme")[0];
sound.loop=false;

function playAudio() { 
  if(sound.loop!=true){
    sound.play();
    $(".volume").attr("src","gallery/soundoff.png");
    sound.loop = true;
  }
  else{
      sound.pause();
      $(".volume").attr("src","gallery/sound.png");
      sound.loop=false;
  }  
} 

$(".volume").on("click",playAudio);

$(".exit").on("click",function(){
    window.close();
})
$("#exit").on("click",function(){
    window.location.href="../pg1.html"; 
});
