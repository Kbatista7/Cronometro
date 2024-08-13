//capiturando os elementos
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const startBt = document.querySelector("#startBt")
const pauseBt = document.querySelector("#pauseBt")
const resetBt = document.querySelector("#resetBt")
const resumeBt = document.querySelector("#resumeBt")
//Criando variáveis 

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

//criando eventos nos botões
 
startBt.addEventListener("click", startTimer);
pauseBt.addEventListener("click", pausarTempo);
resumeBt.addEventListener("click", retomarTempo);
resetBt.addEventListener("click", zerarTempo);

//criando as funções

function startTimer(){
    interval = setInterval(() => {
        if (!isPaused){
            miliseconds += 10
            if (miliseconds === 1000){
                seconds++;
                miliseconds = 0;
            }
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
            minutesEl.textContent = formatoTempo(minutes);
            secondsEl.textContent = formatoTempo(seconds);
            milisecondsEl.textContent = miliseconds;

        }
    }, 10);
    startBt.style.display = "none";
    pauseBt.style.display = "block";
    pauseBt.style.background = "red";
    pauseBt.style.color = "white";
    resumeBt.style.background = "green";
    resumeBt.style.color = "white";
    
    
}

function pausarTempo(){
    isPaused = true;
    pauseBt.style.display = "none";
    resumeBt.style.display = "block";
}
function retomarTempo(){
    isPaused = false;
    pauseBt.style.display = "block";
    resumeBt.style.display = "none";
}
function zerarTempo(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";

    startBt.style.display = "block";
    pauseBt.style.display = "none";
    resumeBt.style.display ="none";

}

function formatoTempo(time){
    return time < 10 ? `0${time}` : time;
}

function formatoMiliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}