let gameSeq= [];
let userSeq= [];

let btns= ["yellow", "red", "purple", "green"];

let started= false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started== false){
        console.log("game started");
        started= true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 300);
}

function levelUp() {
    userSeq= [];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn chosen
    let randInx= Math.floor(Math.random()*3);
    let randColor= btns[randInx];
    let randBtn= document.querySelector(`.${randColor}`);
    // console.log(randInx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    //console.log("current level", level);

    
    if (userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,2000);
        }
    }else{
        h2.innerHTML= `Game over ! Your score was<b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress() {
    //console.log(this);
    let btn= this;
    userFlash(btn);

    userColor= btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
    started =false;
    gameSeq=[];
    userSeq= [];
    level=0;

}