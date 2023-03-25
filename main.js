//initial console log to check the JS file has been linked properly
console.log(`Javascript has been linked!`);

//identify the HTML elements and store them as variables
let namebutton=document.querySelector(`#name-button`);
let namebox=document.querySelector(`#name-box`);
let welcomemessage=document.querySelector(`#welcome-message`);
let rolldicebutton=document.querySelector(`#rolldice`);
let gamesection=document.querySelector(`#gamesection`);
let playermovessection=document.querySelector(`#playermoves`);
let callbluffbutton=document.querySelector(`#callbluffbutton`);
let callspotonbutton=document.querySelector(`#callspotonbutton`);
let bidbutton=document.querySelector(`#bidbutton`);
let playermessage=document.querySelector(`#playermessage`);
let dicenumber=document.querySelector(`#dicenumber`);
let diceface=document.querySelector(`#diceface`);
let currentbidbox=document.querySelector(`#currentbidbox`);

//testing functions and buttons to check if rolling still works when players lose dice
let testremovediceplayerbutton=document.querySelector(`#testremovediceplayer`);
let testremovedicecomputerbutton=document.querySelector(`#testremovedicecomputer`);
// testremovedicecomputerbutton.style.display="none";
// testremovediceplayerbutton.style.display="none";
testremovedicecomputerbutton.addEventListener(`click`, removeDiceComputer);
testremovediceplayerbutton.addEventListener(`click`, removeDicePlayer);
function removeDiceComputer(){computerhowmanydice--;}
function removeDicePlayer(){playerhowmanydice--;}

//hide the game section until name has been entered
gamesection.style.display="none";

//add event listener to the name button to run the enter name function
namebutton.addEventListener(`click`, enterName);

//function to enter name once button is clicked - once entered, hides the name section and
// displays the game section, but hides the player moves until the game begins.
function enterName(){
  welcomemessage.textContent=`Welcome to Liar's Dice, ${namebox.value}!`;
  gamesection.style.display="block";
  playermovessection.style.display="none";
  namebutton.style.display="none";
  namebox.style.display="none";
}

//create empty array for player dice locations in HTML
const playerdicelocations = [];

//identify each player dice location in the HTML
for (let i = 1; i <= 5; i++) {
  playerdicelocations[i-1] = document.querySelector(`#playerdice${i}`);
}

//create empty array for computer dice locations in HTML
const computerdicelocations = [];

//identify each computer dice location in the HTML
for (let i = 1; i <= 5; i++) {
  computerdicelocations[i-1] = document.querySelector(`#computerdice${i}`);
}

//create empty arrays for the player and computer dice rolls
const playerroll =[];
const computerroll=[];
let playerstartingdice=5;
let computerstartingdice=5;
let playerhowmanydice=5;
let computerhowmanydice=5;

//add event listener to the Start Game button to run the start game function
rolldicebutton.addEventListener(`click`, rollDice)

//start game function
function rollDice (){
    //first reset all the dice locations to nothing
    for (let i=0; i<=playerstartingdice-1; i++) {
    playerdicelocations[i].innerHTML = "";}
    playerroll.length=playerhowmanydice;
    console.log(`The player dice array has ${playerroll.length} entries`);
    // for loop to create the player dice roll - generate 5 random numbers between 1&6
    for (let i=0; i<=playerhowmanydice-1; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    //store the random number in the playerroll array
    playerroll[i]=randomNumber;
    //set the image source to be the png file ending with the random number
    let imgSrc = `images/dice${randomNumber}.png`;
    //create a new img element
    let img = document.createElement("img");
    //assign the new img elements source as the file above
    img.src = imgSrc;
    //set the image width and height to 50
    img.width = 50;
    img.height = 50;
    //add the new img element into the player dice location
    playerdicelocations[i].appendChild(img);
    }   

    //below does the same as above for the computer dice roll - for now they're visible for ease of creation, later will be hidden
    for (let i=0; i<=computerstartingdice-1; i++) {
      computerdicelocations[i].innerHTML = "";
      computerroll.length=computerhowmanydice;
      console.log(`The computer dice array has ${computerroll.length} entries`);
    }
    for (let i=0; i<=computerhowmanydice-1; i++) {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      computerroll[i]=randomNumber;
      let imgSrc = `images/dice${randomNumber}.png`;
      let img = document.createElement("img");
      img.src = imgSrc;
      img.width = 50;
      img.height = 50;
      computerdicelocations[i].appendChild(img);
      }   

//determine who goes first with a random number between 1 & 2
// let randomNumber = Math.floor(Math.random() * 2) + 1;
// let playergoesFirst;
// if (randomNumber===1) {playergoesFirst=true;} else {playergoesFirst=false;}
// if (playergoesFirst) {
  rolldicebutton.style.display="none";
  playermovessection.style.display="block";
  callbluffbutton.style.display="none";
  callspotonbutton.style.display="none";
  bidbutton.textContent="Bid";
  playermessage.textContent="You go first! Make your bid."
//   }
// else {
//   playermovessection.style.display="block";
//   rolldicebutton.style.display="none";
//   bidbutton.textContent="Raise Bid";
//   playermessage.textContent="The computer has played first! Raise or call."
//   }
}

bidbutton.addEventListener(`click`, playerBid);

let currentBid = {number: 0, face: 0};

function computerMove(){
  let randomNumber = Math.floor(Math.random() * 2) + 1;
  if (randomNumber===1){currentBid.number++;}
  else {currentBid.face++;}
  currentbidbox.textContent=`The computer has raised the bid to ${currentBid.number} ${currentBid.face}s`;

}

function playerBid(){
  currentBid.number=parseInt(dicenumber.value);
  currentBid.face=parseInt(diceface.value);
  currentbidbox.textContent=`The current bid is ${currentBid.number} ${currentBid.face}s`
  setTimeout(computerMove, 2000);
  callbluffbutton.style.display="block";
  callspotonbutton.style.display="block";
}

function countOccurrences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
      console.log(`${arr[i]} is ${num}`);
      console.log(typeof arr[i]);
    }
    else {console.log(`${arr[i]} is not ${num}`);
          console.log(`The type of player roll ${i} is ${typeof arr[i]}`);
          console.log(`The type of ${num} is ${typeof num}`);
        }
  }
  return count;
}

callbluffbutton.addEventListener(`click`, callBluff);
function callBluff(){
  console.log(`The current bid face is ${currentBid.face}`);
  console.log(`The player roll is ${playerroll}`);
  let playertotal=countOccurrences(playerroll, currentBid.face)
  console.log(`Player has ${playertotal} ${currentBid.face}s`);
  console.log(`The computer roll is ${computerroll}`);
  let computertotal=countOccurrences(computerroll, currentBid.face);
  console.log(`Computer has ${computertotal} ${currentBid.face}s`);
  if ((playertotal+computertotal)>=currentBid.number) {
    currentbidbox.textContent=`They weren't bluffing! You lose a die`;
    playerhowmanydice--;
    rolldicebutton.style.display="block";
    console.log(playerhowmanydice);
  }
  else {
    currentbidbox.textContent=`They were bluffing! They lose a die`;
    computerhowmanydice--;
    rolldicebutton.style.display="block";
    console.log(computerhowmanydice);
  }
  if (computerhowmanydice===0){currentbidbox.textContent="You win! The computer lost all their dice"}
  if (playerhowmanydice===0){currentbidbox.textContent="You lose! You lost all your dice"}
}

callspotonbutton.addEventListener(`click`, callSpotOn);
function callSpotOn(){

}



