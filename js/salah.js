// flags to handle routing between pages of game 

let PageEasyLevel; 
let PageHardLevel; 
let username, gamelevel; 

let img1Id = $("img")[0].id; 
let img2Id = $("img")[1].id;


// routing to other pages depending on game level selection by user 

$("#playEasyBtn").on("click", function(){ // easy level page 
    PageEasyLevel = true;
    username = $("#username").val();
    if(PageEasyLevel && username){
        window.location.href="../pg2.html";
        $("#gamepage").css("background-image",`URL("../gallery/gamepage")`);

        // sending data stored from homepage to other pages using local storage !
        gamelevel = img1Id;
        localStorage.setItem("gamelevel", gamelevel);
        localStorage.setItem("username", username);
        //console.log("easy"); 
    }
}); 


$("#playHardBtn").on("click", function(){  // hard level page 
    username = $("#username").val();
    PageHardLevel = true;
    if(PageHardLevel && username){
        window.location.href="../pg2.html"; 
        $("#gamepage").addClass("darkmode");
        gamelevel = img2Id;
        localStorage.setItem("gamelevel", gamelevel);
        localStorage.setItem("username", username);
        //console.log("hard");
    }
});




