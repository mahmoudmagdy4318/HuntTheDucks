// flags to handle routing between pages of game 
let PageEasyLevel; 
let PageHardLevel; 
let username, gamelevel; 
let maxScore, playerObj; 

// routing to other pages depending on game level selection by user 
$("#playEasyBtn").on("click", function(){ // easy level page 
    PageEasyLevel = true; 
    username = $("#username").val();    
    if(PageEasyLevel && username){
<<<<<<< HEAD
=======
        window.location.href="../pg2.html";
        $("#gamepage").css("background-image",`URL("../gallery/gamepage")`);

>>>>>>> f83fdb0b227e2e4c20818b82b448bc86e9b74b8e
        // sending data stored from homepage to other pages using local storage !
        gamelevel = "easylevel";

        if((JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["level"]){
            maxScore = (JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["score"];
         }
         else{
            maxScore = 0;
         }

        playerObj = {
         //   "username": username,
            "score": maxScore,
            "level": gamelevel    
        };
        localStorage.setItem(`id ${username} ${gamelevel}`, JSON.stringify(playerObj)); 
        localStorage.setItem("username", username);
        localStorage.setItem("level", gamelevel); 
        window.location.href="../pg2.html";
    }
}); 


$("#playHardBtn").on("click", function(){  // hard level page 
    username = $("#username").val();
    PageHardLevel = true;
    if(PageHardLevel && username){
<<<<<<< HEAD
        gamelevel = "hardlevel";
        if((JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["level"]){
            maxScore = (JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["score"];
        }
        else{
            maxScore = 0;
        }

        playerObj = {
           // "username": username,
            "score": maxScore,
            "level": gamelevel    
        };

        localStorage.setItem(`id ${username} ${gamelevel}`, JSON.stringify(playerObj)); 
=======
        window.location.href="../pg2.html"; 
        $("#gamepage").addClass("darkmode");
        gamelevel = img2Id;
        localStorage.setItem("gamelevel", gamelevel);
>>>>>>> f83fdb0b227e2e4c20818b82b448bc86e9b74b8e
        localStorage.setItem("username", username);
        localStorage.setItem("level", gamelevel); 
        window.location.href = "../pg2.html"; 
    }
});

<<<<<<< HEAD

// adding audio to homepage
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


// audio and exit page handling 
$(".volume").on("click",playAudio);

$(".exit").on("click",function(){
    window.close();
})
$("#exit").on("click",function(){
    window.location.href="../pg1.html"; 
});
=======

>>>>>>> f83fdb0b227e2e4c20818b82b448bc86e9b74b8e


