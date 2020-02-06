// flags to handle routing between pages of game 

let PageEasyLevel; 
let PageHardLevel; 
let username, gamelevel; 

let img1Id = $("img")[0].id; 
let img2Id = $("img")[1].id;


// routing to other pages depending on game level selection by user 

$("img:first").on("click", function(){ // easy level page 
    PageEasyLevel = true;
    username = $("#username").val();
    if(PageEasyLevel && username){
        window.location.href="../pg2.html";
        // sending data stored from homepage to other pages using local storage !
        gamelevel = img1Id;
        localStorage.setItem("gamelevel", gamelevel);
        localStorage.setItem("username", username);
        //console.log("easy"); 
    }
}); 


$("img:eq(1)").on("click", function(){  // hard level page 
    username = $("#username").val();
    PageHardLevel = true;
    if(PageHardLevel && username){
        window.location.href="../pg2.html"; 
        gamelevel = img2Id;
        localStorage.setItem("gamelevel", gamelevel);
        localStorage.setItem("username", username);
        //console.log("hard");
    }
});

// adding audio to homepage 

let sound = document.getElementById("main_theme"); 
function playAudio() { 
  sound.play(); 
  sound.loop = true;
} 

startBtn.addEventListener("click", playAudio);


