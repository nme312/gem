//generate random number between 19 and 120
var targetNum;

//link target number to corresponding html element
var targetNumSpan = $("#target-number-span");

//generate random number between 1 and 12
var randomNum1;
var randomNum2;
var randomNum3;
var randomNum4;

//create variable to store player's total score
var currentTot;

//link current total to corresponing html element
var currentTotSpan = $("#current-total");

//create variables to store player wins and loses
var userWins = 0;
var userLoses = 0;

//link wins and loses to corresponding html elements
var userWinsSpan = $("#user-wins");
var userLosesSpan = $("#user-loses");

$(".gem-1").on("click", function () {
    currentTot = currentTot + randomNum1;
    console.log(currentTot);
    console.log(targetNum + " target");

    currentTotSpan.text(currentTot);
    userWinsSpan.text(userWins);
    userLosesSpan.text(userLoses);

    checkForWinLoss();
});

$(".gem-2").on("click", function () {
    currentTot = currentTot + randomNum2;
    console.log(currentTot);
    console.log(targetNum + " target");

    currentTotSpan.text(currentTot);
    userWinsSpan.text(userWins);
    userLosesSpan.text(userLoses);

    checkForWinLoss();

});

$(".gem-3").on("click", function () {
    currentTot = currentTot + randomNum3;
    console.log(currentTot);
    console.log(targetNum + " target");

    currentTotSpan.text(currentTot);
    userWinsSpan.text(userWins);
    userLosesSpan.text(userLoses);

    checkForWinLoss();

});

$(".gem-4").on("click", function () {
    currentTot = currentTot + randomNum4;
    console.log(currentTot);
    console.log(targetNum + " target");

    currentTotSpan.text(currentTot);
    userWinsSpan.text(userWins);
    userLosesSpan.text(userLoses);

    checkForWinLoss();
});

//store game components in function
function startGame() {
        targetNum = Math.floor(Math.random() * 120) + 19;
        targetNumSpan.text(targetNum);

        randomNum1 = Math.floor(Math.random() * 12) + 1;
        randomNum2 = Math.floor(Math.random() * 12) + 1;
        randomNum3 = Math.floor(Math.random() * 12) + 1;
        randomNum4 = Math.floor(Math.random() * 12) + 1;

        currentTot = 0;
        currentTotSpan.text(currentTot);

        userWinsSpan.text(userWins);
        userLosesSpan.text(userLoses);

        console.log(randomNum1 + " num1");
        console.log(randomNum2 + " num2");
        console.log(randomNum3 + " num3");
        console.log(randomNum4 + " num4");
        console.log(targetNum + " target");
        console.log(currentTot + " current");
    }

    function clickGem(gemClass) {
        $(gem).on("click", function () {
            currentTot = currentTot + randomNum4;
            console.log(currentTot);
            console.log(targetNum + " target");
        
            currentTotSpan.text(currentTot);
            userWinsSpan.text(userWins);
            userLosesSpan.text(userLoses);
        
            checkForWinLoss();
        });
    }

function checkForWinLoss() {
    if (currentTot === targetNum) {
        userWins++;
        startGame();
        console.log("You win");
        console.log(userWins + " wins");
    }

    if (currentTot > targetNum) {
        userLoses++;
        startGame();
        console.log("You lose");
        console.log(userLoses + " loses");
    }
}

startGame();