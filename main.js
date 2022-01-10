console.log("JS Loaded");
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
  } else {
    console.log("Sorry! No Web Storage support.");
  }

let boxP = document.getElementById("box");
let triRed = document.getElementById("triangle");
let timeScorer = document.getElementById("timeScore");
let startButton = document.getElementById("startButton");
let endScreen = document.getElementById("gameOver");
let restartG = document.getElementById("restart");
let closeGame = document.getElementById("closeG");
let StartMcGee = document.getElementById("startButton");

//let boxHeight = parseInt(window.getComputedStyle(boxP).getPropertyValue('top'));
//let triangleXpos = parseInt(window.getComputedStyle(triRed).getPropertyValue('left'));

let triangleEnd = 590;
let endscore = 0;
let uptime;
let tt = 0


function jumpyJumperson (evt){
    evt.preventDefault();

    if (boxP.classList !== "boxJumpA"){
        boxP.classList.add("boxJumpA");
       // console.log("jump"); 
        var jump = new Audio("./sounds/jump.wav");
        jump.volume = .30;
        jump.play();
    }

        let jtime = setTimeout(function(){
            boxP.classList.remove("boxJumpA");
        },500);

};




function endGame(){
    endScreen.classList.remove("show");
    Hidestart();
    return location.reload();

};

function Hidestart() {
    
    if (StartMcGee.style.display === "none") {
        StartMcGee.style.display = "inline ";
        StartMcGee.style.position = "relative" ;

    } else {
        StartMcGee.style.display = "none";
    }
  }; 
 
function gameStart(){

    Hidestart();
    let youlose = false;
    var audio = new Audio("./sounds/gameMusic.wav");
    audio.volume = .15;
    audio.play();

    document.addEventListener("keydown",jumpyJumperson);

    // increase time / score
    uptime = setInterval(function (){
        tt += 1;
        timeScorer.innerText= tt;
    }, 500);

     // moves the Triangle
     let moveyMoverson = setInterval(function (){
        if (triRed.classList != "slide2right"){
        triRed.classList.add("slide2right");}
                

        let timeout =  setTimeout(function (){
            //console.log("works");
            triRed.classList.remove("slide2right");
        },1300);
                       
    },1301) 
    //document.addEventListener("keydown",jumpyJumperson);
    
    // checks if  you lose the game
    let gameOver = setInterval(function(){
        if ( (parseInt(window.getComputedStyle(triRed).getPropertyValue('left'))< 80 ) && (parseInt(window.getComputedStyle(triRed).getPropertyValue('left')) > 25)&& (parseInt(window.getComputedStyle(boxP).getPropertyValue('top')) >= 105)){
            audio.pause(); 
            clearInterval(moveyMoverson);
            // clearInterval(uptime);
            // console.log(uptime);
            youlose = true;
            audio.currentTime = 0;
            endscore = parseInt(timeScorer.innerText);
            console.log(endscore);
            tt=0;
            timeScorer.innerText=0;
            endScreen.classList.add("show");
            //alert("Game Over!");
            
        
    }
    },10); 

    
  
};

    
 startButton.addEventListener("click", gameStart);
 //document.addEventListener("keydown",jumpyJumperson);
 closeG.addEventListener("click", endGame);
