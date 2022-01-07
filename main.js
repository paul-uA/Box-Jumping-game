console.log("JS Loaded");

let boxP = document.getElementById("box");
let triRed = document.getElementById("triangle");
let timeScorer = document.getElementById("timeScore");
let startButton = document.getElementById("startButton");
let endScreen = document.getElementById("gameOver");
let restartG = document.getElementById("restart");
let closeGame = document.getElementById("closeG");

//let boxHeight = parseInt(window.getComputedStyle(boxP).getPropertyValue('top'));
//let triangleXpos = parseInt(window.getComputedStyle(triRed).getPropertyValue('left'));

let triangleEnd = 590;
let endscore = 0;




function checkMcCheckerson(){
    console.log("this checks out!");
};


function startTime(){
    let tt = 0
    //console.log("works");
    let uptime = setInterval(function (){
        tt += 1;
        timeScorer.innerText= tt;
    }, 500);
};

// function triangleMover (){
//     let moveyMoverson = setInterval(function (){
//         if (triRed.classList != "slide2right"){
//         triRed.classList.add("slide2right");}
                

//         let timeout =  setTimeout(function (){
//             //console.log("works");
//             triRed.classList.remove("slide2right");
//         },1300);
                       
//     },1301)    
// };



function jumpyJumperson (evt){
    evt.preventDefault();

    if (boxP.classList !== "boxJumpA"){
        boxP.classList.add("boxJumpA");
        console.log("jump"); 
        var jump = new Audio("./sounds/jump.wav");
        jump.volume = .30;
        jump.play();
    }

        let jtime = setTimeout(function(){
            boxP.classList.remove("boxJumpA");
        },500);

};

// function death2Tri(){  
//     let gameOver = setInterval(function(){
//         if ( (parseInt(window.getComputedStyle(triRed).getPropertyValue('left'))< 81 ) && (parseInt(window.getComputedStyle(triRed).getPropertyValue('left')) > 25)&& (parseInt(window.getComputedStyle(boxP).getPropertyValue('top')) >= 98)){
//             clearInterval(moveyMoverson);
//             alert("Game Over!");
        
//     }
//     },10); 

// };

function reSetG(){
    
    if (endscore < timeScorer.innerText)
    endScreen.classList.remove("show");



};

function endGame(){
    endScreen.classList.remove("show");
    return location.reload();

};

function gameStart(){
    
    let youlose = false;
    var audio = new Audio("./sounds/gameMusic.wav");
    audio.volume = .15;
    audio.play();

     // moves the Triangle
     let moveyMoverson = setInterval(function (){
        if (triRed.classList != "slide2right"){
        triRed.classList.add("slide2right");}
                

        let timeout =  setTimeout(function (){
            //console.log("works");
            triRed.classList.remove("slide2right");
        },1300);
                       
    },1301) 
    document.addEventListener("keydown",jumpyJumperson);
    
    // checks if  you lose the game
    let gameOver = setInterval(function(){
        if ( (parseInt(window.getComputedStyle(triRed).getPropertyValue('left'))< 80 ) && (parseInt(window.getComputedStyle(triRed).getPropertyValue('left')) > 25)&& (parseInt(window.getComputedStyle(boxP).getPropertyValue('top')) >= 105)){
            clearInterval(moveyMoverson);
            youlose = true;
            audio.pause();
            audio.currentTime = 0;
            endscore = parseInt(timeScorer.innerText);
            endScreen.classList.add("show");
            //alert("Game Over!");
            
        
    }
    },10); 
   
   
    
    //starts the timeer
    let tt = 0
    //console.log("works");
    if (youlose !== true ){
        let uptime = setInterval(function (){
            tt += 1;
            timeScorer.innerText= tt;
        }, 500);
    

    }
    var audio = new Audio("./sounds/gameMusic.wav");
    audio.volume = .15;
    audio.play();
    
   
  
};

    
 startButton.addEventListener("click", gameStart);
//  document.addEventListener("keydown",jumpyJumperson);
 restartG.addEventListener("click", reSetG);
 closeG.addEventListener("click", endGame);
