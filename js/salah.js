// flags to handle routing between pages of game 

let PageEasyLevel; 
let PageHardLevel; 
let username, gamelevel; 
let maxScore = 0, playerObj; 

// routing to other pages depending on game level selection by user 

$("#playEasyBtn").on("click", function(){ // easy level page 
    PageEasyLevel = true;
    username = $("#username").val();
    if(PageEasyLevel && username){
        window.location.href="../pg2.html";
        // sending data stored from homepage to other pages using local storage !
        gamelevel = "easylevel";
        console.log(gamelevel);
        playerObj = {
            "username": username,
            "score": maxScore,
            "level": gamelevel    
        };
        localStorage.setItem("id", JSON.stringify(playerObj));
    }
}); 


$("#playHardBtn").on("click", function(){  // hard level page 
    username = $("#username").val();
    PageHardLevel = true;
    if(PageHardLevel && username){
        window.location.href="../pg2.html"; 
        gamelevel = "hardlevel";
        console.log(gamelevel);
        playerObj = {
            "username": username,
            "score": maxScore,
            "level": gamelevel    
        };
        localStorage.setItem("id", JSON.stringify(playerObj));
    }
});

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

$(".volume").on("click",playAudio);

$(".exit").on("click",function(){
    window.close();
})
$("#exit").on("click",function(){
    window.location.href="../pg1.html"; 
});


