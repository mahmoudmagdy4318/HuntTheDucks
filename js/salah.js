// flags to handle routing between pages of game 
let PageEasyLevel;
let PageHardLevel;
let username, gamelevel;
let playerObj;
let maxScore = 0;

// routing to other pages depending on game level selection by user 

$("#playEasyBtn").on("click", function() { // easy level page 
    PageEasyLevel = true;
    username = $("#username").val();
    if (PageEasyLevel && username) {
        gamelevel = "easylevel";
        $("#gamepage").css("background-image", `URL("../gallery/gamepage")`);
        // sending data stored from homepage to other pages using local storage !
        maxScore = 100;

        playerObj = {
            "scores": maxScore,
            "level": gamelevel
        };
        localStorage.setItem(`id ${username} ${gamelevel}`, JSON.stringify(playerObj));
        localStorage.setItem("username", username);
        localStorage.setItem("level", gamelevel);
        window.location.href = "../pg2.html";
    }
});


$("#playHardBtn").on("click", function() { // hard level page 
    // window.location.href = "../pg2.html";
    username = $("#username").val();
    console.log("inside");
    PageHardLevel = true;
    if(PageHardLevel && username){

        gamelevel = "hardlevel";
        playerObj = {
            "score": maxScore,
            "level": gamelevel
        };
        localStorage.setItem(`id ${username} ${gamelevel}`, JSON.stringify(playerObj));
        localStorage.setItem("username", username);
        localStorage.setItem("level", gamelevel);
        // window.location.href = "../pg2.html";
        if ((JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["level"]) {
            maxScore = (JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["score"];
            console.log("hi");
            
        } else {
            maxScore = 0;
        }

        

        

        // if ((JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["level"]) {
        //     maxScore = (JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["score"];
        // } else {
        //     maxScore = 0;
        // }
        window.location.href = "../pg2.html";
    }
});
















//$("#usernameplace").text(localStorage.getItem("username").substring(0,7).toUpperCase()); 

// let playername = localStorage.getItem("username");
// let level = localStorage.getItem("level");
// let playerObj1;
// let maxScore1 = (JSON.parse(localStorage.getItem(`id ${playername} ${level}`)))["score"];

// some logic && code here  to update score during playing 
// e.g : score = "100"; 

// $("span:eq(0)").text(playername);
// $("span:eq(1)").text(maxScore1);
// $("p").text(level); 

// document.body.addEventListener("click", function(){
// maxScore1++;
// $("span:eq(1)").text(maxScore1);
// playerObj1 = {
//     "score": maxScore1,
//     "level": level    
// };
// localStorage.setItem(`id ${playername} ${level}`, JSON.stringify(playerObj1)); 
// });