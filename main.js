console.log("JS Loaded");

let boxP = document.getElementById("box");
let triRed = document.getElementById("triangle");
let timeScorer = document.getElementById("timeScore");
let startButton = document.getElementById("startButton");
let end = true;
let speed = 10;



function checkMcCheckerson(){
    console.log("this checks out!");
};


function startTime(){
    let tt = 0
    console.log("works");
    let uptime = setInterval(function (){
    if ( end !== false){
        tt += 1;
        timeScorer.innerText= tt;
    }}, 500);
};

function triangleMover (){
    
    let cordX =(document.getElementById("triangle").style.left);
    console.log(cordX)
    // if (cordX !== 0){
    //     cordX = cordX - speed;
    //     triRed.style.left = cordX +"px";
    // }

}
    
startButton.addEventListener("click", triangleMover);
