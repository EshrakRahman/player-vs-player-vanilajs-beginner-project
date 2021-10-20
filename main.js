const inputElm = document.querySelector("#input");
const formElm = document.querySelector("form");
const winScoreElm = document.querySelector(".winScore");
const p1BtnElm = document.querySelector(".p1Btn");
const p1ScoreElm = document.querySelector(".p1Score");
const p2BtnElm = document.querySelector(".p2Btn");
const p2ScoreElm = document.querySelector(".p2Score");
const resetElm = document.querySelector(".reset");

let winScore = 20;
let p1Score = 0;
let p2Score = 0;
let turn = "player-1";

function checkWinner() {
    const isP1Winner = p1Score === winScore;
    const isP2QWinner = p2Score === winScore;
    if (isP1Winner || isP2QWinner){
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
    }
    displayWinner(isP1Winner, isP2QWinner);
}



function displayWinner(p1, p2) {
    if (p1){
        formElm.insertAdjacentHTML("beforebegin", "<p class='winner-message'> Player-1 is winner</p>");
    } else if (p2) {
        formElm.insertAdjacentHTML("beforebegin", "<p class='winner-message'> Player-2 is winner</p>");
    }
}

formElm.addEventListener('submit', ev => {
    ev.preventDefault();
    winScore = Number(inputElm.value);
    winScoreElm.textContent = inputElm.value;
    inputElm.value = '';
});


p1BtnElm.addEventListener('click', e=>{
    if (turn === 'player-1'){
        p1Score++;
        p1ScoreElm.textContent = p1Score;
        turn = "player-2";
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.removeAttribute('disabled');
        checkWinner();
    }
})

p2BtnElm.addEventListener('click', e=>{
    if (turn === "player-2"){
        p2Score++;
        p2ScoreElm.textContent = p2Score;
        turn = "player-1";
        p2BtnElm.setAttribute('disabled', 'disabled');
        p1BtnElm.removeAttribute('disabled');
        checkWinner();
    }
})



resetElm.addEventListener('click', evt => {
    // let resetMsg = "Restart the game";
    winScore = 0;
    p1Score = 0;
    p2Score = 0;
    inputElm.value = '';
    p1ScoreElm.textContent = '0';
    p2ScoreElm.textContent = '0';
    winScoreElm.textContent = '0';
    p2BtnElm.removeAttribute('disabled');
    p1BtnElm.removeAttribute('disabled');
    turn = "player-1";

    const winningMsg = document.querySelector(".winner-message")
    winningMsg.remove();

    formElm.insertAdjacentHTML("beforebegin", "<p class='restart-message'>The game has been restarted!</p>");
    inputElm.addEventListener('click', check =>{
        const deleteResetMsg = document.querySelector(".restart-message");
        deleteResetMsg.remove();
    })

});

