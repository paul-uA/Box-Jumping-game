console.log("JS Loaded");

let boxP = document.getElementById("box");
let triRed = document.getElementById("triangle");
let timeScorer = document.getElementById("timeScore");
let startButton = document.getElementById("startButton");
let triangleEnd = 590;




function checkMcCheckerson(){
    console.log("this checks out!");
};


function startTime(){
    let tt = 0
    //console.log("works");
    let uptime = setInterval(function (){
    if ( end !== false){
        tt += 1;
        timeScorer.innerText= tt;
    }}, 500);
};

function triangleMover (){
    let moveyMoverson = setInterval(function (){
        if (triRed.classList != "slide2right"){
        triRed.classList.add("slide2right"); 
        }
        else 
            triRed.classList.remove("slide2right");
        
    },1000)   
};

function jumpyJumperson (){
    boxP.classList.add("boxJumpA");
    let j = setTimeout(function (){
        boxP.classList.remove("boxJumpA")      
},400);
}
    
startButton.addEventListener("click", triangleMover);
document.addEventListener("keydown",jumpyJumperson);
