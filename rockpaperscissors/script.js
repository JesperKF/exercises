function playGame(playerChoice){
    const buttons = ["rock", "paper", "scissors"];
    const computerChoice = buttons[Math.floor(Math.random() * 3)];

    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");

    document.getElementById("win").classList.add("hidden");
    document.getElementById("lose").classList.add("hidden");
    document.getElementById("draw").classList.add("hidden");

    player1.classList.remove("rock", "paper", "scissors", "shake");
    player2.classList.remove("rock", "paper", "scissors", "shake");

    player1.classList.add("shake");
    player2.classList.add("shake");

    setTimeout(() => {
        // Fjerner css animationen
        player1.classList.remove("shake");
        player2.classList.remove("shake");

        // Tilføjer den valgte hånd og computerens tilfældigt valgte
        player1.classList.add(playerChoice);
        player2.classList.add(computerChoice);

        // Her gennemgåes spillerens og computerens valg og fremviser resultatet af spillet
        if (playerChoice === computerChoice) {
            document.getElementById("draw").classList.remove("hidden");
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock")
        ) {
            document.getElementById("win").classList.remove("hidden");
        } else {
            document.getElementById("lose").classList.remove("hidden");
        }

        console.log(`Player: ${playerChoice}, Computer: ${computerChoice}`);
    }, 1800); //forløbet matcher tiden defineret i css
}