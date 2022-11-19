const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const v1 = document.getElementById("1");
const v2 = document.getElementById("2");
const v3 = document.getElementById("3");
const shoot = document.getElementById("shoot");
const countdown = document.getElementById("countdown");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("btn1");
const playerOptions = document.querySelectorAll("[data-option]");
const result = document.getElementById("result");
const youpicDis = document.getElementById("you-picked");
let startingSeconds = 7;
let playerPicked = 0;
let game = 0;
let aiPick = 0;

function random(num1, num2) {
    let random = Math.floor((Math.random() * num2) + num1);
    while (random > num2) {
        random = Math.floor((Math.random() * num2) + num1);
    }
    return random;
}

class Game {
   constructor(playerpick) {
       this.playerpick = playerpick;
   }
  
   aiPick() {
       aiPick = random(1, 3);
       switch (aiPick) {
           case 1:
               return "Rock";
               break;
           case 2:
               return "Paper";
               break;
           case 3:
               return "Scissors";
               break;
       }
   }
   
    whoWin(playerPick, aiPick, result, whopicdis) {
        if (playerPick == aiPick) {
            setTimeout(() => {
                result.innerText = "It was a Draw!";
                whopicdis.innerText = "You Picked The Same Thing As The Computer"
            }, 4375)  
        } else if (playerPick == "Rock" && aiPick == "Paper") {
            setTimeout(() => {
                result.innerText = "The Computer Won";
                whopicdis.innerText = "You Picked Rock While Computer Picked Paper";
            }, 4375)  
        } else if (playerPick == "Paper" && aiPick == "Rock") {
            setTimeout(() => {
                result.innerText = "You Won!";
                whopicdis.innerText = "You Picked Paper While Computer Picked Rock";
            }, 4375)  
        } else if (playerPick == "Rock" && aiPick == "Scissors") {
            setTimeout(() => {
                result.innerText = "You Won!";
                whopicdis.innerText = "You Picked Rock While Computer Picked Scissors";
            }, 4375)
        } else if (playerPick == "Scissors" && aiPick == "Rock") {
            setTimeout(() => {
                result.innerText = "The Computer Won!";
                whopicdis.innerText = "You Picked Scissors While Computer Picked Rock";
            }, 4375)
        } else if (playerPick == "Paper" && aiPick == "Scissors") {
            setTimeout(() => {
                result.innerText = "The Computer Won!";
                whopicdis.innerText = "You Picked Paper While Computer Picked Scissors";
            }, 4375)
        } else if (playerPick == "Scissors" && aiPick == "Paper") {
            setTimeout(() => {
                result.innerText = "You Won!";
                whopicdis.innerText = "You Picked Scissors While Computer Picked Paper";
            }, 4375)  
        }
    }
   
    startCountdown(countdown) {
        btn.style.display = "none";
        const endInterval = setInterval(() => {
            switch (startingSeconds) {
                case 7:
                    countdown.innerHTML = "Rock";
                    rock.play();
                    break;
                case 6:
                    countdown.innerHTML = "Paper";
                    paper.play();
                    break;
                case 5:
                    countdown.innerHTML = "Scissors";
                    scissors.play();
                    break;
                case 4:
                    countdown.innerHTML = "1";
                    v1.play();
                    break;
                case 3:
                    countdown.innerHTML = "2";
                    v2.play();
                    break;
                case 2:
                    countdown.innerHTML = "3";
                    v3.play();
                    break;
                case 1:
                    resetBtn.style.display = "block";
                    shoot.play();
                    countdown.innerHTML = "Shoot!";
                    break;
            }

            startingSeconds--;

            if (startingSeconds == -1) {
                clearInterval(endInterval);
            }
        }, 625)
    }
   
    reset() {
        playerPicked = 0;
        aiPick = 0;
        startingSeconds = 7;
        result.innerHTML = "Start a game to get results!";
        youpicDis.innerHTML = "";
        btn.style.display = "block";
        resetBtn.style.display = "none";
        countdown.innerHTML = "You haven't started the game so there is no countdown yet";
    }
 }
  
playerOptions.forEach(option => {
    option.addEventListener("click",() => {
        playerPicked = option.getElementsByTagName("h5")[0].innerText;
        game = new Game(playerPicked);
        aiPick = game.aiPick();
    })
})
  
btn.addEventListener("click", () => {
    game.startCountdown(countdown);
    game.whoWin(playerPicked, aiPick, result, youpicDis);
})
  
resetBtn.addEventListener("click", () => {
    game.reset();
})