console.log("JS Loaded");

let boxP = document.getElementById("box");
let triRed = document.getElementById("triangle");
let timeScorer = document.getElementById("timeScore");
let startButton = document.getElementById("startButton");

//let boxHeight = parseInt(window.getComputedStyle(boxP).getPropertyValue('top'));
//let triangleXpos = parseInt(window.getComputedStyle(triRed).getPropertyValue('left'));

let triangleEnd = 590;




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



function jumpyJumperson (){
    if (boxP.classList !== "boxJumpA"){
        boxP.classList.add("boxJumpA");
        console.log("jump"); 
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

function gameStart(){
    let youlose = false;
    
    // checks if  you lose the game
    let gameOver = setInterval(function(){
        if ( (parseInt(window.getComputedStyle(triRed).getPropertyValue('left'))< 81 ) && (parseInt(window.getComputedStyle(triRed).getPropertyValue('left')) > 25)&& (parseInt(window.getComputedStyle(boxP).getPropertyValue('top')) >= 98)){
            clearInterval(moveyMoverson);
            youlose = true;
            alert("Game Over!");
        
    }
    },10); 
   
    // moves the Triangle
    let moveyMoverson = setInterval(function (){
        if (triRed.classList != "slide2right"){
        triRed.classList.add("slide2right");}
                

        let timeout =  setTimeout(function (){
            //console.log("works");
            triRed.classList.remove("slide2right");
        },1300);
                       
    },1301) 
    
    //starts the timeer
    let tt = 0
    //console.log("works");
    if (youlose !== true ){
        let uptime = setInterval(function (){
            tt += 1;
            timeScorer.innerText= tt;
        }, 500);
    

    }
   
  
};

    
 startButton.addEventListener("click", gameStart);
 document.addEventListener("keydown",jumpyJumperson);

