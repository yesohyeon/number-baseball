const inputBox = document.querySelector(".try");
const strikeNumber = document.querySelector(".strike");
const ballNumber = document.querySelector(".ball");
const start = document.querySelector(".start");
const restart = document.querySelector(".restart");

let answerArray = [];
let clickCount = 0;

function createAnswer(){
  const numbers = [0,1,2,3,4,5,6,7,8,9];

  let answerNumber = [];

  for(let i = 0; i < 3; i++){
    const randomIndex = Math.floor(Math.random() * numbers.length);
    answerNumber.push(randomIndex);

  }
  return answerNumber;
}

function startBtn (){
  answerArray = createAnswer();
  console.log(answerArray);
}

function restartBtn(){
  answerArray = createAnswer();
  console.log(answerArray);
  clickCount = 0;
}

function playGame(){

  const inputNumber = inputBox.value;
  const inputStringArray = Array.from(inputNumber);
  const inputArrayLength = inputStringArray.length;
  clickCount = clickCount + 1;

  if(inputArrayLength !== 3){
    alert("세자리 값을 입력하세요");
  }else{
    const inputNumberArray = inputStringArray.map(Number);

    let strike = 0;
    for(let i = 0; i < 3; i++){
      if(inputNumberArray[i] === answerArray[i]){
        strike = strike + 1;
      }
    }
    strikeNumber.textContent = strike.toString();

    let ball = 0;

    for(let a = 0; a < 3; a++){
      if(inputNumberArray[a] !== answerArray[a]){
        for(let i = 0; i < 3; i++){
          if(inputNumberArray[a] === answerArray[i]){
            ball = ball + 1;
          }
        }
      }
    }
    ballNumber.textContent = ball.toString();
  }
}

inputBox.addEventListener("keypress", function(event){
  if(clickCount === 10){
    alert("You can't do game")
  }else if(event.keyCode === 13){
          playGame();
        }
      }
)

function btnEvents(){
  start.addEventListener("click", startBtn);
  restart.addEventListener("click", restartBtn);
}

btnEvents();

console.log(answerArray);
