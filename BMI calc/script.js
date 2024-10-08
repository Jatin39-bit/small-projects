const calculateBmiButton = document.getElementById("calculateBmi");
const bmiResult = document.getElementById("bmiResult");

calculateBmiButton.addEventListener("click", () => {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; 

    if (!weight || !height) {
        bmiResult.textContent = "Please enter valid numbers!";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let message;

    if (bmi < 18.5) {
        message = `Your BMI is ${bmi} (Underweight)`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = `Your BMI is ${bmi} (Normal)`;
    } else if (bmi >= 25 && bmi < 29.9) {
        message = `Your BMI is ${bmi} (Overweight)`;
    } else {
        message = `Your BMI is ${bmi} (Obese)`;
    }

    bmiResult.textContent = message;
});
