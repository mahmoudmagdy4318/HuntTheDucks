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

        if (localStorage.length > 0) { // check if localStorage is not empty if not empty
            for (let i = 0; i < localStorage.length; i++) { // then update maxscore value 
                if (localStorage.key(i) == `id ${username} ${gamelevel}`) {
                    maxScore = (JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["scores"];
                    break;
                }
                maxScore = 0;
            }

        } else {
            maxScore = 0;
        }
        console.log(maxScore);
        playerObj = {
            "scores": maxScore,
            "level": gamelevel
        };

        localStorage.setItem(`id ${username} ${gamelevel}`, JSON.stringify(playerObj));
        localStorage.setItem("username", username);
        localStorage.setItem("level", gamelevel);

        window.location.href = "../GamePage.html";
    }
});


$("#playHardBtn").on("click", function() { // hard level page 
    username = $("#username").val();
    console.log("inside");
    PageHardLevel = true;
    if (PageHardLevel && username) {
        gamelevel = "hardlevel";
        if (localStorage.length > 0) { // check if localStorage is not empty if not empty
            for (let i = 0; i < localStorage.length; i++) { // then update maxscore value 
                if (localStorage.key(i) == `id ${username} ${gamelevel}`) {
                    maxScore = (JSON.parse(localStorage.getItem(`id ${username} ${gamelevel}`)))["scores"];
                    break;
                }
                maxScore = 0;
            } // end for 

        } else {
            maxScore = 0;
        } // end if 

        playerObj = {
            "scores": maxScore,
            "level": gamelevel
        };

        localStorage.setItem(`id ${username} ${gamelevel}`, JSON.stringify(playerObj));
        localStorage.setItem("username", username);
        localStorage.setItem("level", gamelevel);

        window.location.href = "../GamePage.html";
        
    }
});

