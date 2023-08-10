var compareNum = null;
var pts = 0;
var numbers = [];

// Create variables to reference each element in the HTML file
var ptsElmt = document.getElementById("points");
var compareElmt = document.getElementById("numberCompare");
var genBtn = document.getElementById("generate");
var num1Btn = document.getElementById("number1");
var num2Btn = document.getElementById("number2");
var num3Btn = document.getElementById("number3");
var resetBtn = document.getElementById("reset");

// Set the initial score to 0
ptsElmt.innerHTML = pts;

// Function to generate four random numbers
function generate() {
    // Generate three random numbers
    // These are the numbers the user can pick from
    numbers = [
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1
    ];

    // Generate the fourth random number
    // This is the random number that the user's choice is compared to
    compareNum = Math.floor(Math.random() * 10) + 1

    // Update the button text to display the newly generated random numbers
    num1Btn.innerHTML = numbers[0];
    num2Btn.innerHTML = numbers[1];
    num3Btn.innerHTML = numbers[2];

    // Uncomment the line below if you want to see the comparison number
    // compareElmt.innerHTML = compareNum;
}

// Function to compare the user's number to the comparison number
// Returns 1 if the users number is greater than the comparison number
// Returns 0 otherwise
function compare(compNum, selectedNum) {
    return selectedNum > compNum;
}

// Function to handle the number1 button press
function number1Press() {
    // Increment the user's score by 1 if the user's selction is greater than the comparison number
    // Increment the user's score by 0 otherwise
    pts += compare(compareNum, numbers[0]);
    // Update the element containing the user's score to reflect the current score
    ptsElmt.innerHTML = pts;
    // Generate four new random numbers
    generate();
}

// Function to handle the number2 button press
function number2Press() {
    // Increment the score
    pts += compare(compareNum, numbers[1]);
    // Update the displayed score
    ptsElmt.innerHTML = pts;
    // Generate new random numbers
    generate();
}

// Function to handle the number3 button press
function number3Press() {
    // Increment the score
    pts += compare(compareNum, numbers[2]);
    // Update the displayed score
    ptsElmt.innerHTML = pts;
    // Generate new random numbers
    generate();
}

// Function to handle the reset button press
function resetPress() {
    // Set the score back to 0
    pts = 0;
    // Update the displayed score to reflect the current score
    ptsElmt.innerHTML = pts;
    // Generate four new random numbers
    generate();
}

// Generate four initial random numbers to start the game
generate();

// Event listeners for each button listening for button presses
genBtn.addEventListener("click", generate);
num1Btn.addEventListener("click", number1Press);
num2Btn.addEventListener("click", number2Press);
num3Btn.addEventListener("click", number3Press);
resetBtn.addEventListener("click", resetPress);