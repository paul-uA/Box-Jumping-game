console.log("JS Loaded");

let boxP = document.getElementById("box");
let triRed = document.getElementById("triangle");
let timeScorer = document.getElementById("timeScore");
let startButton = document.getElementById("startButton");
let end = true;
let triangleEnd = 590;
let speed = 25;



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
    let cordX = triangleEnd;
    let movingTheTri = setInterval( function(){
        if((cordX > 0) && (end === true) ) {
            cordX = cordX - speed;
            document.getElementById("triangle").style.left =cordX+"px" ;
        }
    }, 550);
   
}
    
startButton.addEventListener("click", triangleMover);
