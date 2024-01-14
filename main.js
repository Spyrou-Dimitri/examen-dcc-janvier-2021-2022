// Nom    :
// Prénom :
// Groupe : 2285

const list = document.querySelector(".app");
const option = document.getElementById("fonts");
let scoreElement = document.querySelector(".information__score");
const timerElement = document.querySelector(".information__time");
let  score = 0;
const inputFont = document.getElementById("font"); // Déplace ici la déclaration de inputFont


const inputValid = document.querySelector("#play > input:last-child");
const horloge ={
    minutes:0,
    seconds: timerElement.dataset.maxTime
}
const decompteur = setInterval(()=> {
    if (horloge.seconds === 0) {
        horloge.seconds = timerElement.dataset.maxTime
    } else {
        horloge.seconds --;
    }
    updateTimer()
}, 1000)

function generateList() {
    for (const font of fonts) {
        list.insertAdjacentHTML("beforeend", `<li data-font-name="${font.name}" data-family="${font.family}" class='app__item'>
  <div class="app__item__info"><span class="app__item__info__name">${font.name}</span>
    <span class="app__item__info__info">${font.family} - ${font.author}</span>
  </div>
  <img class='app__item__font' src='./assets/fonts/${font.file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
</li>`)
    }
}
function generateOption() {
    for (const font of fonts) {
        option.insertAdjacentHTML("beforeend", `<option value="${font.name}"></option>`);
    }
}
function initScore() {
    scoreElement.textContent = `${scoreElement.dataset.text} ${score}/100`
}
function updateTimer() {
    timerElement.textContent = `${timerElement.dataset.text} ${horloge.minutes} : ${horloge.seconds}`
}

function play() {

    inputValid.addEventListener('click', () => {
        console.log(list.lastChild.dataset.fontName);
        console.log(inputFont);
        if (inputFont === list.lastChild.dataset.fontName) {
            score++;
        } else {
            score--;
        }
        initScore(); // Met à jour le score après chaque clic
    });
}
generateList();
generateOption();
initScore();
updateTimer();
play();
/*
 const tymper = {
    init() {
        this.htmlList = document.querySelector(".app");
        this.option = document.getElementById("fonts");
        this.scoreElement = document.querySelector(".information__score");
        this.timerElement = document.querySelector(".information__time");
        this.htmlList = document.querySelector(".app");
        this.generateLi();
        this.generateOption();
        this.initScore();
        this.timer = {
            minutes: 0,
            secondes: parseInt(this.timerElement.dataset.maxTime),
        }
        this.updateTimer();
        this.setIntervalId = setInterval(() =>{
            if (this.timer.secondes===0) {
                this.timer.secondes = parseInt(this.timerElement.dataset.maxTime);
            }else {
                this.timer.secondes --;
            }
            this.updateTimer();
        }, 1000)
    },
    generateLi(){
        for (const font of fonts) {
            this.htmlList.insertAdjacentHTML("beforeend", `<li data-font-name="${font.name}" data-family="${font.family}" class='app__item'>
        <div class="app__item__info"><span class="app__item__info__name">${font.name}</span>
            <span class="app__item__info__info">${font.family} - ${font.author}</span>
        </div>
        <img class='app__item__font' src='./assets/fonts/${font.file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
    </li>`);
        }
    },
    generateOption(){
        fonts.forEach((font) => {
            this.option.insertAdjacentHTML("beforeend", `<option value="${font.name}">${font.name}</option>`);
        })
    },
    initScore() {
        this.score = 0;
        this.scoreElement.textContent = `${this.scoreElement.dataset.text} ${this.score}`
    },
    updateTimer() {
        this.timerElement.textContent = `${this.timerElement.dataset.text} ${this.timer.minutes} : ${this.timer.secondes}`
    }
}
tymper.init();

 */
