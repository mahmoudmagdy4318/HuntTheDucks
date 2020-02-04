
// let bombTopPos = -500; 
// function randomBombPosition(){
//     bombTopPos +=50; 
//     if(bombTopPos > windowHeight - 100){
//         $("div").css("display","none");
//     }
//     // to do 
//     // some handling on div 
//     $("div").animate({"margin-top":`${bombTopPos}px`});
// }


let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

function createBomb(){ 
    let createdDiv = document.createElement("div");
    createdDiv.style.left = Math.floor(Math.random() * windowWidth);
    createdDiv.style.top =-50;
    document.body.appendChild(createdDiv);
    $("div").last().animate({top:600},2000,()=>{$("div").last().remove()})
    console.log(createdDiv);
}

let id1 = window.setInterval(createBomb, 5000);





//let id2 = window.setInterval(randomBombPosition, 800);


