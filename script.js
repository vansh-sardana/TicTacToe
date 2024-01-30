const boxes = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");
const gameInfo = document.querySelector(".game-info");

let currPlayer;
let gameBoard;
const winPos= [ [0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

gameInit();

function gameInit(){
    currPlayer= "X";
    gameBoard= ["", "", "", "","", "","", "", ""];
    boxes.forEach((box)=>{
        box.innerText="";
        box.classList.remove("win");
        box.style.pointerEvents= "all";
    });
    gameInfo.innerText= `Current Player - ${currPlayer}`;
    btn.classList.remove("active");

}

boxes.forEach((box, index)=>{
    box.addEventListener("click", ()=>{
        handleClick(index);
    });
});

function handleClick(index){
    gameBoard[index]= currPlayer;
    boxes[index].innerText = currPlayer;
    boxes[index].style.pointerEvents= "none";
    swapPlayer();
    gameInfo.innerText= `Current Player - ${currPlayer}`;
    checkIfWin();
}

function swapPlayer(){
    currPlayer = (currPlayer) =="X"?"O":"X";
}

function checkIfWin(){
    let ans= "";
    winPos.forEach((pattern)=>{
        if((gameBoard[pattern[0]]!="" && gameBoard[pattern[1]]!="" & gameBoard[pattern[2]]!="") && (gameBoard[pattern[0]]===gameBoard[pattern[1]] && gameBoard[pattern[1]]===gameBoard[pattern[2]])){
            ans= pattern;
        }
    });
    
    if(ans!=""){
        // adding green background
        boxes[ans[0]].classList.add("win");
        boxes[ans[1]].classList.add("win");
        boxes[ans[2]].classList.add("win");

        gameInfo.innerText= `Player - ${gameBoard[ans[0]]} wins`;
        //once won disable the click on all boxes
        boxes.forEach((box)=>{
            box.style.pointerEvents= "none";
        });

        btn.classList.add("active");
        return;
    }


    //for draw
    let cnt=0;
    gameBoard.forEach((box)=>{
        if(box!==""){
            cnt++;
        }
    });
    if(cnt===9){
        gameInfo.innerText= "Game Tied!";
        btn.classList.add("active");
    }

}

btn.addEventListener("click",gameInit);