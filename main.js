console.log(`Javascript has been linked!`);
let namebutton=document.querySelector(`#name-button`);
let namebox=document.querySelector(`#name-box`);
let welcomemessage=document.querySelector(`#welcome-message`);
let rolldicebutton=document.querySelector(`#rolldice`);
const playerdicelocations = [];
for (let i = 1; i <= 5; i++) {
  playerdicelocations[i-1] = document.querySelector(`#playerdice${i}`);
}
console.log(playerdicelocations);
const playerroll =[];

namebutton.addEventListener(`click`, enterName);
rolldicebutton.addEventListener(`click`, rollDice)

function rollDice (){
    for (let i=0; i<=4; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    playerroll[i]=randomNumber;
    playerdicelocations[i].textContent=playerroll[i];
    }   

}

function enterName(){
    welcomemessage.textContent=`Welcome to Liar's Dice, ${namebox.value}!`;
}