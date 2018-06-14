//Represents A Player
function Player() {
    this.choice = null;
}

//The Game!
var Rochambeau = {
    choices: {ROCK: 0, PAPER: 1, SCISSORS: 2, LIZARD: 3, SPOCK: 4},
    choiceNames: {0: "Rock", 1: "Paper", 2: "Scissors", 3: "Lizard", 4: "Spock"},
    score: {wins: 0, losses: 0, ties: 0},
    matchScore: {wins: 0, losses: 0},
    results: {WIN: 1, TIE: 0, LOSS: -1},

    player: new Player(),
    computer: new Player(),

rockButton: document.getElementById("rock"),
paperButton: document.getElementById("paper"),
scissorsButton: document.getElementById("scissors"),
lizardButton: document.getElementById("lizard"),
spockButton: document.getElementById("spock"),
playButton: document.getElementById("play"),

//Stores the player's choice
storePlayerChoice: function (choice) {
    Rochambeau.player.choice = choice;
        console.log("My choice =" + Rochambeau.player.choice);
    Rochambeau.storeComputerChoice();
},

// Generate the computer's random choice
storeComputerChoice: function () {
    Rochambeau.computer.choice = Math.floor(Math.random() * 5);
        console.log("computer choice =" + Rochambeau.computer.choice);
},

// This is the function for playing the game
playGame: function () {
    if (Rochambeau.player.choice == Rochambeau.computer.choice) {
         console.log("tie");
        ++Rochambeau.score.ties;
        Rochambeau.displayGameResult("tie");
    } else if (Rochambeau.player.choice == Rochambeau.choices.ROCK && (Rochambeau.computer.choice == Rochambeau.choices.SCISSORS ||        Rochambeau.computer.choice == Rochambeau.choices.LIZARD)) {
         console.log("win");
        ++Rochambeau.score.wins;
        Rochambeau.displayGameResult("win");
    } else if (Rochambeau.player.choice == Rochambeau.choices.PAPER && (Rochambeau.computer.choice == Rochambeau.choices.ROCK ||          Rochambeau.computer.choice == Rochambeau.choices.SPOCK)) {
         console.log("win");
        ++Rochambeau.score.wins;
        Rochambeau.displayGameResult("win");
    } else if (Rochambeau.player.choice == Rochambeau.choices.SCISSORS && (Rochambeau.computer.choice == Rochambeau.choices.PAPER ||             Rochambeau.computer.choice == Rochambeau.choices.LIZARD)) {
         console.log("win");
        ++Rochambeau.score.wins;
        Rochambeau.displayGameResult("win");
    } else if (Rochambeau.player.choice == Rochambeau.choices.LIZARD && (Rochambeau.computer.choice == Rochambeau.choices.SPOCK ||              Rochambeau.computer.choice == Rochambeau.choices.PAPER)) {
        console.log("win");
        ++Rochambeau.score.wins;
        Rochambeau.displayGameResult("win");
    } else if (Rochambeau.player.choice == Rochambeau.choices.SPOCK && (Rochambeau.computer.choice == Rochambeau.choices.SCISSORS ||             Rochambeau.computer.choice == Rochambeau.choices.ROCK)) {
        console.log("win");
        ++Rochambeau.score.wins;
        Rochambeau.displayGameResult("win");
    } else {
        console.log("lose");
        ++Rochambeau.score.losses;
        Rochambeau.displayGameResult("lose")
   }
},

//Displays the result of the game
displayGameResult: function (result) {
       if (Rochambeau.score.wins == 2) {
           var messagetwo = "You won the match " + Rochambeau.score.wins + " - " + Rochambeau.score.losses + ".";
       } else if (Rochambeau.score.losses == 2) {
           var messagetwo = "You lost the match " + Rochambeau.score.wins + " - " + Rochambeau.score.losses + ".";
       } else {
           var messagetwo = "Your current best of three score is " + Rochambeau.score.wins + " - " + Rochambeau.score.losses + ".";
       }
            var message = "Your choice was " + Rochambeau.choiceNames[Rochambeau.player.choice] + " and the computer's choice was " + Rochambeau.choiceNames[Rochambeau.computer.choice] + ".";

        if (result == "win") {
           document.getElementById("result").textContent = message + " YOU WIN! " + messagetwo;
           document.getElementById("result").className = "alert alert-success";
    } else if (result == "lose") {
           document.getElementById("result").textContent = message + " YOU LOSE! " + messagetwo;
           document.getElementById("result").className = "alert alert-danger";
    } else {
           document.getElementById("result").textContent = message + " A tie. " + messagetwo;
           document.getElementById("result").className = "alert alert-info";
    }
        Rochambeau.updateScoreBoard();
        Rochambeau.updateMatchScore();
   },

updateMatchScore: function () {
       if (Rochambeau.score.wins == 2) {
           ++Rochambeau.matchScore.wins;
           Rochambeau.score.wins = 0;
           Rochambeau.score.losses = 0;
           Rochambeau.score.ties = 0;
       } else if (Rochambeau.score.losses == 2) {
           ++Rochambeau.matchScore.losses;
           Rochambeau.score.wins = 0;
           Rochambeau.score.losses = 0;
           Rochambeau.score.ties = 0;
       }
   },

updateScoreBoard: function () {
       document.getElementById("wins").textContent = Rochambeau.score.wins;
       document.getElementById("losses").textContent = Rochambeau.score.losses;
       document.getElementById("ties").textContent = Rochambeau.score.ties;
       document.getElementById("matchWins").textContent = Rochambeau.matchScore.wins;
       document.getElementById("matchLosses").textContent = Rochambeau.matchScore.losses;
   },

}

Rochambeau.rockButton.addEventListener('click', () => {
   Rochambeau.storePlayerChoice(0);
   Rochambeau.playButton.disabled = false;
});

Rochambeau.paperButton.addEventListener('click', () => {
   Rochambeau.storePlayerChoice(1);
   Rochambeau.playButton.disabled = false;
});

Rochambeau.scissorsButton.addEventListener('click', () => {
   Rochambeau.storePlayerChoice(2);
   Rochambeau.playButton.disabled = false;
});

Rochambeau.lizardButton.addEventListener('click', () => {
   Rochambeau.storePlayerChoice(3);
   Rochambeau.playButton.disabled = false;
});

Rochambeau.spockButton.addEventListener('click', () => {
   Rochambeau.storePlayerChoice(4);
   Rochambeau.playButton.disabled = false;
});

Rochambeau.playButton.addEventListener('click', () => {
   Rochambeau.storeComputerChoice();
   Rochambeau.playGame();
   Rochambeau.playButton.disabled = true;
});
