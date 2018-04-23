//generate random number between 19 and 120
var targetNum;

//generate random number between 1 and 12
var randomNum1;
var randomNum2;
var randomNum3;
var randomNum4;

//create variable to store player's total score
var currentTot;

//create variables to store player wins and loses
var userWins = 0;
var userLoses = 0;

//store game components in function
function startGame() {
    targetNum = Math.floor(Math.random() * 120) + 19;
    
    randomNum1 = Math.floor(Math.random() * 12) + 1;
    randomNum2 = Math.floor(Math.random() * 12) + 1;
    randomNum3 = Math.floor(Math.random() * 12) + 1;
    randomNum4 = Math.floor(Math.random() * 12) + 1;

    currentTot = 0;
    
    $(".gem-1").on("click", function() {
        currentTot = currentTot + randomNum1;
        console.log(currentTot);
        console.log(targetNum + " target");

        if(currentTot === targetNum) {
            userWins++;
            startGame();
            console.log("You win");
            console.log(userWins + " wins");
        }
    
        if(currentTot > targetNum) {
            userLoses++;
            startGame();
            console.log("You lose");
            console.log(userLoses + " loses");
        }

    });
    
    $(".gem-2").on("click", function() {
        currentTot = currentTot + randomNum2;
        console.log(currentTot);
        console.log(targetNum + " target");

        if(currentTot === targetNum) {
            userWins++;
            startGame();
            console.log("You win");
            console.log(userWins + " wins");
        }
    
        if(currentTot > targetNum) {
            userLoses++;
            startGame();
            console.log("You lose");
            console.log(userLoses + " loses");
        }

    });

    $(".gem-3").on("click", function() {
        currentTot = currentTot + randomNum3;
        console.log(currentTot);
        console.log(targetNum + " target");

        if(currentTot === targetNum) {
            userWins++;
            startGame();
            console.log("You win");
            console.log(userWins + " wins");
        }
    
        if(currentTot > targetNum) {
            userLoses++;
            startGame();
            console.log("You lose");
            console.log(userLoses + " loses");
        }

    });

    $(".gem-4").on("click", function() {
        currentTot = currentTot + randomNum4;
        console.log(currentTot);
        console.log(targetNum + " target");

        if(currentTot === targetNum) {
            userWins++;
            startGame();
            console.log("You win");
            console.log(userWins + " wins");
        }
    
        if(currentTot > targetNum) {
            userLoses++;
            startGame();
            console.log("You lose");
            console.log(userLoses + " loses");
        }

    });

    // if(currentTot === targetNum) {
    //     userWins++;
    //     startGame();
    //     console.log("You win");
    //     console.log(userWins + " wins");
    // }

    // if(currentTot > targetNum) {
    //     userLoses++;
    //     startGame();
    //     console.log("You lose");
    //     console.log(userLoses + " loses");
    // }

    console.log(randomNum1 + " num1");
    console.log(randomNum2 + " num2");
    console.log(randomNum3 + " num3");
    console.log(randomNum4 + " num4");
    console.log(targetNum + " target");
    
    
    console.log(currentTot + " current");

    
    
}



startGame();