console.log(`Javascript has been linked!`);
let namebutton=document.querySelector(`#name-button`);
let namebox=document.querySelector(`#name-box`);
let welcomemessage=document.querySelector(`#welcome-message`);

namebutton.addEventListener(`click`, enterName);

function enterName(){
    welcomemessage.textContent=`Welcome to Liar's Dice, ${namebox.value}!`;
}