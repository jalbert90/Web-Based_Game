var numbers = [1, 2, 3];
var randomNumber = Math.floor(Math.random() * numbers.length);
var score = 0;

document.getElementById("number-1").textContent = numbers[0];
document.getElementById("number-2").textContent = numbers[1];
document.getElementById("number-3").textContent = numbers[2];

document.getElementById("guess-button").addEventListener("click", function () {
    var guess = parseInt(document.getElementById("guess-input").value);

    if (guess > randomNumber) {
        score++;
        document.getElementById("score").textContent = score;
    } else {
        alert("Your guess was too low!");
    }
});