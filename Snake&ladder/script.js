document.addEventListener("DOMContentLoaded", () => {

    const board = document.getElementById("board");
    const rollDiceButton = document.getElementById("rollDice");
    
    // Create the game board
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = i; // Set the id of each cell to its corresponding number
        cell.textContent = i;
        board.appendChild(cell);
    }

    // Define snakes and ladders
    const snakesAndLadders = {
        16: 6,
        47: 26,
        49: 11,
        56: 53,
        62: 19,
        64: 60,
        87: 24,
        93: 73,
        95: 75,
        98: 78,
    };

    // Add snakes and ladders to the board
    for (const [start, end] of Object.entries(snakesAndLadders)) {
        document.getElementById(start).classList.add("snake");
        document.getElementById(end).classList.add("ladder");
    }

    // Initialize player position
    let playerPosition = 1;

    // Function to roll the dice
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Function to move the player
    function movePlayer(currentPosition, diceValue) {
        const newPosition = currentPosition + diceValue;
        return snakesAndLadders[newPosition] || newPosition;
    }

    // Function to update the player position on the board
    function updatePlayerPosition() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => cell.classList.remove("active"));
        document.getElementById(playerPosition).classList.add("active");
    }

    // Handle dice roll
    rollDiceButton.addEventListener("click", () => {
        const diceValue = rollDice();
        alert(`You rolled a ${diceValue}`);
        playerPosition = movePlayer(playerPosition, diceValue);
        alert(`You landed on ${playerPosition}`);
        updatePlayerPosition();
    });

    // Initialize player position on the board
    updatePlayerPosition();
});