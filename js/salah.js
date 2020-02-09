// flags to handle routing between pages of game 
let PageEasyLevel;
let PageHardLevel;
let username, gamelevel;
let maxScore, playerObj;

// routing to other pages depending on game level selection by user 
$("#playEasyBtn").on("click", function() { // easy level page 
    PageEasyLevel = true;
    username = $("#username").val();
    if (PageEasyLevel && username) {
        window.location.href = "../pg2.html";
        // $("#gamepage").css("background-image",`URL("../gallery/gamepage")`);

        // sending data stored from homepage to other pages using local storage !
        gamelevel = "easylevel";

        if ((JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["level"]) {
            maxScore = (JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["score"];
        } else {
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
    }
});


$("#playHardBtn").on("click", function() { // hard level page 
    username = $("#username").val();
    PageHardLevel = true;
    if(PageHardLevel && username){
        gamelevel = "hardlevel";
        if ((JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["level"]) {
            maxScore = (JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["score"];
        } else {
            maxScore = 0;
        }

        playerObj = {
            // "username": username,
            "score": maxScore,
            "level": gamelevel
        };

        localStorage.setItem(`id ${username} ${gamelevel}`, JSON.stringify(playerObj));
        localStorage.setItem("username", username);
        localStorage.setItem("level", gamelevel);
        window.location.href = "../pg2.html";
    }
});


// adding audio to homepage
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

// audio and exit page handling 
$(".volume").on("click", playAudio);

$(".exit").on("click", function() {
    window.close();
})
$("#exit").on("click", function() {
    window.location.href = "../pg1.html";
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