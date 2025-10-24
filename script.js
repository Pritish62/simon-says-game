let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","purple","green"];

let start = false;
let lvl = 0;
let highScore=0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(start == false){
        console.log("game is started");
        start = true;

        levelUp();  
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);

}
function levelUp(){
    userSeq=[];
    lvl++;

    if(lvl > highScore){
        highScore=lvl;
    }
    h2.innerText =`Level ${lvl} | Highest Score: ${highScore}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
     btnFlash(randBtn);
}
function checkAns(idx){
    // console.log("current levele", lvl);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }
    } else{
        h2.innerHTML = "try again <br>press any key to start"
        document.body.classList.add("red-flash");
        setTimeout(() => {
        document.body.classList.remove("red-flash");
        }, 300);

        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    btnFlash(btn);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    start=false;
    lvl=0;
}
