var body = document.getElementById("body");
var generateButton = document.getElementById("generate");
var checkButton = document.getElementById("check");
var resetButton = document.getElementById("reset");
var userInput = document.getElementById("input");
var scoreOutput = document.getElementById("score");
var lifeCount = document.getElementById("life");
var displayTrials = document.getElementById("displaytrials");
var buttonDiv = document.getElementById("button1");
var buttonDiv2 = document.getElementById("button2");

var availableTrialsDisplay = document.getElementById("numberofavailabletrialsdisplay");

var level = 1;
var randomNumber = 0;
var userInputNumber = 0;
var numberOfAvailableTrials = 7;
var numberOfTrials = 0;
var win = false;

// images

var guyCrying = document.getElementById("blackguycrying");
var wellDone = document.getElementById("welldonemyfriend");
var confusedMonkey = document.getElementById("confusedmonkey");
var coffinDance = document.getElementById("coffindance");
var vanishingEmoji = document.getElementById("vanishingemoji");
var wrestlerAmazed = document.getElementById("wrestleramazed");

var images = document.getElementsByClassName("images");

var winningImages = [wellDone, wrestlerAmazed];
var losingImages = [guyCrying, confusedMonkey, coffinDance, vanishingEmoji];

// levels shenanigans

var levelButton = document.getElementById("level");
var levels = document.getElementsByClassName("levels");
var levelsOptionDiv = document.getElementById("levelsoption");

// var level1 = document.getElementById("level1");
// var level2 = document.getElementById("level2");
// var level3 = document.getElementById("level3");

// var levelsArray = [level1, level2, level3]


// function changeLevel() {
//     levelsOptionDiv.style.display = "block"
// }

// function changeToLevel (x){
//     console.log("x: "+x)
//     numberOfAvailableTrials = x;
//     setNumberOfAvailableTrials();

// }

function setNumberOfAvailableTrials() {
    availableTrialsDisplay.innerText = numberOfAvailableTrials;
}

function getRandomdInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessANumber() {
    randomNumber = getRandomdInteger(1, 100);
    console.log ("Random Number:"+randomNumber)

}

function getTheUserInput() {
    userInputNumber = userInput.valueAsNumber;
}


setNumberOfAvailableTrials();
guessANumber();
function checkNumber() {

    getTheUserInput();

    if (userInputNumber > 100 || userInputNumber < 0){
        alert("number must be between 0-100")
    }
    else if (userInputNumber < randomNumber) {
        console.log("go higher brah");
        scoreOutput.innerHTML = "go higher than " + userInputNumber;

        numberOfTrials++;
    }

    else if (userInputNumber > randomNumber) {
        console.log("go lower");
        scoreOutput.innerHTML = "try something less than " + userInputNumber;

        numberOfTrials++;
    }

    else if (userInputNumber == randomNumber) {
        numberOfTrials++;
        console.log("perfect bro!!!!");
        scoreOutput.innerHTML = "You have Won!!!"
        guessANumber();
        won();
    }

    else {
        alert("Waiting for your input")
    }

}

function start() {


    if (numberOfTrials < numberOfAvailableTrials) {
        checkNumber();
        displayTrials.innerHTML = numberOfTrials;

        if (numberOfTrials == numberOfAvailableTrials) {
            scoreOutput.innerHTML = "Game Over!!!";
            buttonDiv.style.display = "none"
            buttonDiv2.style.display = "block"
            resetButton.style.backgroundColor = "green";
            body.style.backgroundColor = "red";
            // guyCrying.style.display = "block";
            losingImages[getRandomdInteger(0,3)].style.display = "block";
        }
    }
}

function reset() {

    resetButton.style.backgroundColor = "gray   ";
    resetButton.innerText = "Reset";
    numberOfTrials = 0;
    displayTrials.innerHTML = numberOfTrials;
    scoreOutput.innerHTML = "";
    userInput.value = "";
    win = false;
    buttonDiv.style.display = "block"
    body.style.backgroundColor = "cornflowerblue";
    // guyCrying.style.display = "none";
    // losingImages[0,1,2,3].style.display = "none";
    // wellDone.style.display = "none"
    // wrestlerAmazed.style.display = "none    "


    let arrayLength = winningImages.length;

    for (let i = 0; i < arrayLength; i++) {
        winningImages[i].style.display = "none";
    }

    arrayLength = losingImages.length;

    for (let i = 0; i < arrayLength; i++) {
        losingImages[i].style.display = "none";
    }

}

function won() {
    win = true;
    buttonDiv.style.display = "none"
    if (win) {
        console.log("we got our selves a winner");
    }
    // resetButton.style.backgroundColor = "green";
    resetButton.innerText = "restart";
    body.style.backgroundColor = "green";
    // wellDone.style.display = "block";
    winningImages[getRandomdInteger(0, 1)].style.display = "block";
}
