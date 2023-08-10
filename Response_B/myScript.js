function generateNumbers() {
    // Generate three random numbers between 1 and 10
    var numbers = [
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1
    ];

    // Display the numbers
    document.getElementById("numbers").innerHTML = numbers.join(", ");
}

function compareNumbers(userNumber, generatedNumber) {
    // If the user's number is higher, they score a point
    if (userNumber > generatedNumber) {
        return 1;
    } else {
        return 0;
    }
}

function keepTrackOfScore() {
    // Initialize the score
    var score = 0;

    // Add a point to the score if the user wins
    score += compareNumbers(userNumber, generatedNumber);

    // Display the score
    document.getElementById("score").innerHTML = score;
}

// Add an event listener to the button
document.getElementById("generate-numbers").addEventListener("click", generateNumbers);

// Keep track of the score
keepTrackOfScore();