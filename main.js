const inputElm = document.querySelector("#input");
const formElm = document.querySelector("form");
const winScoreElm = document.querySelector(".winScore");
const p1BtnElm = document.querySelector(".p1Btn");
const p1ScoreElm = document.querySelector(".p1Score")
const p2BtnElm = document.querySelector(".p2Btn");
const p2ScoreElm = document.querySelector(".p2Score")

const resetElm = document.querySelector(".reset");

let winScore = 20;
let p1Score = 0;
let p2Score = 0;

formElm.addEventListener('submit', ev => {
    ev.preventDefault();
    winScore = Number(inputElm.value);
    winScoreElm.textContent = inputElm.value;
    inputElm.value = '';
});

resetElm.addEventListener('click', evt => {
    inputElm.value = '';
    p1ScoreElm.textContent = '0';
    p2ScoreElm.textContent = '0';

});

p1BtnElm.addEventListener('click', e=>{
    p1Score++;
    p1ScoreElm.textContent = p1Score;
})

p2BtnElm.addEventListener('click', e=>{
    p2Score++;
    p2ScoreElm.textContent = p2Score;
})

