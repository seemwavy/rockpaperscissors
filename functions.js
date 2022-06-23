function gameStart() {
    let playa = prompt("Rock, Papers, Scissors shoot!");
    let playerSelection = playa.toLowerCase();
    let plays = ["rock", "paper", "scissors"]; 
    function compChoice (plays) {
        return plays[Math.floor(Math.random()*plays.length)];
    } 
    if (playerSelection == compChoice(plays)) {
        return  alert("Tie! Try again");
    }
    else if (playerSelection == "rock" && compChoice(plays) == "paper") {
        return alert("Paper beats Rock, you lose!");
    }
    else if (playerSelection == "rock" && compChoice(plays) == "scissors") {
        return alert("Rock beats Scissors, you win!");
    }
    else if (playerSelection == "paper" && compChoice(plays) == "scissors") {
        return alert("Scissors beats Paper, you lose!");
    }
    else if (playerSelection == "paper" && compChoice(plays) == "rock") {
        return alert("Paper beats Rock, you win!");
    }
    else if (playerSelection == "scissors" && compChoice(plays) == "rock") {
        return alert("Rock beats Scissors, you lose!");
    }
    else if (playerSelection == "scissors" && compChoice(plays) == "paper") {
        return alert("Scissors beats Paper, you win!");
    }
    else {
        return alert("Please type Rock, Paper, or Scissors");
    } 
}