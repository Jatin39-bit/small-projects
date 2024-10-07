const inputText = document.getElementById("inputText");
const checkButton = document.getElementById("checkButton");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");
const reversedText = document.getElementById("reversedText");

checkButton.addEventListener("click", () => {
    const input = inputText.value.trim().toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedInput = input.split('').reverse().join('');

    reversedText.textContent = `Reversed: ${reversedInput}`;
    if (input === reversedInput && input !== '') {
        resultBox.className = "result-box palindrome";
        resultText.textContent = "Yes, it's a Palindrome!";
    } else {
        resultBox.className = "result-box not-palindrome";
        resultText.textContent = "No, it's not a Palindrome.";
    }

    resultBox.style.display = "block";
});
