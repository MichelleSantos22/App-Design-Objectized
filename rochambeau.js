/*Represents a player*/
function Player() {
    this.choice = null;
}

/*The game of Rochambeau!*/
var Rochambeau = {

    choices: {ROCK: 0, PAPER: 1, SCISSORS: 2},

    score: {wins: 0, losses: 0, ties: 0},

    results: {WIN: 1, TIE: 0, LOSS: -1},

    player: new Player(),
    computer: new Player()
}

// Stores the player's choice, then call's the function for storing the computer's choice
storePlayerChoice: function (choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.storeComputerChoice();
    },

// Generate the computer's random choice
storeComputerChoice: function () {
    this.computer.choice = Math.floor(Math.random() * 3);
}

// This is the function for playing the game
playGame: function () {
    // Here is the game ruleset algorithm
    if (this.player.choice == this.computer.choice) {
        // We have a tie!
        ++score.ties;
        displayGameResult("tie")
    } else if (this.player.choice == choices.ROCK && this.computer.choice == choices.SCISSORS) {
        // Rock beats scissors - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (this.player.choice == choices.PAPER && this.computer.choice == choices.ROCK) {
        // Paper beats rock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (this.player.choice == choices.SCISSORS && this.computer.choice == choices.PAPER) {
        // Scissors beats paper - a win!
        ++score.wins;
        displayGameResult("win")
    } else {
        // All other combinations are losses
        ++score.losses;
        displayGameResult("lose")
    }
}

//Displays the result of the game
displayGameResult: function (result) {
    // Define an array of text labels for the choices 0, 1, 2;
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    // Add to the base message if it was a win, loss, or tie
    if (result === "win") {
        // Display that it was a win
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        // Display that it was a loss
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    displayScoreBoard();
}

// Function for displaying the score
displayScoreBoard: function (winsId, lossesId, tiesId) {
    document.getElementById(winsId).textContent = score.wins;
    document.getElementById(lossesId).textContent = score.losses;
    document.getElementById(tiesId).textContent = score.ties;
}

// The button elements
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var playButton = document.getElementById("play");

// Add the event handlers
rockButton.addEventListener('click', () => {storePlayerChoice(0)});
paperButton.addEventListener('click', () => {storePlayerChoice(1)});
scissorsButton.addEventListener('click', () => {storePlayerChoice(2)});
playButton.addEventListener('click', () => {playGame()});
