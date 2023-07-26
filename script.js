let turn = "X";
let gameOver = false;
function changeTurn() {
    if (turn === "X") {
        return "0";
    }
    else {
        return "X";
    }
}

function checkWin() {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true
        }
    })
}

function toReset() {
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
}

let boxes = document.getElementsByClassName("box");
let boxesArray = Array.from(boxes);

for (let i = 0; i< boxesArray.length; i++) {
    let element = boxesArray[i];
    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click', function () {
        if(gameOver){
            toReset();
        }

        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();

            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
}

reset.addEventListener("click", toReset);