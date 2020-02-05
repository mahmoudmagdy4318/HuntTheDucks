// flags to handle routing between pages of game 

let PageEasyLevel; 
let PageHardLevel; 
let userName, gamelevel; 

// input name validation 
$("input:first").on("blur", function() {
    if ($(this).val().match('^[a-zA-Z]{3,16}$')){
        userName=$(this).val();
        console.log("hiii");
       
    } else {
        alert("That's not a name");
    }
});

// routing to other pages depending on game level selection by user 
$("#playEasyBtn").on("click", function(){ // easy level page 
    PageEasyLevel = true; 
    PageHardLevel = false;
    
    if(PageEasyLevel && userName){
        window.location.href="../pg2.html";
        // sending data stored from homepage to other pages using local storage !
        gamelevel = $("#playEasyBtn").val();
        localStorage.setItem({
            "gameLevel":gamelevel,
            "userName": userName
        });
    }
}); 

$("#playHardBtn").on("click", function(){  // hard level page 
    PageHardLevel = true;
    PageEasyLevel = false;
    if(PageHardLevel && userName){
        window.location.href="../pg2.html"; 
        gamelevel = $("#playHardBtn").val();

        localStorage.setItem({
            "gameLevel":gamelevel,
            "userName": userName
        });
    }
});


// todo::
// localStorage 
// mina: will get content of url by local storage in second page 
// window.location.hash+=userName;



