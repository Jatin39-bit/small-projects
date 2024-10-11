const inputValue = document.getElementById("inputValue");
const unitType = document.getElementById("unitType");
const convertFrom = document.getElementById("convertFrom");
const convertTo = document.getElementById("convertTo");
const convertButton = document.getElementById("convertButton");
const conversionResult = document.getElementById("conversionResult");

const units = {
    length: ["Meters", "Kilometers", "Miles", "Feet"],
    weight: ["Kilograms", "Pounds", "Ounces", "Grams"],
    temperature: ["Celsius", "Fahrenheit", "Kelvin"]
};

function populateUnits() {
    convertFrom.innerHTML = '';
    convertTo.innerHTML = '';

    units[unitType.value].forEach(unit => {
        const optionFrom = document.createElement("option");
        optionFrom.value = unit.toLowerCase();
        optionFrom.textContent = unit;
        convertFrom.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = unit.toLowerCase();
        optionTo.textContent = unit;
        convertTo.appendChild(optionTo);
    });
}

unitType.addEventListener("change", populateUnits);
populateUnits(); 

convertButton.addEventListener("click", () => {
    const value = parseFloat(inputValue.value);
    const fromUnit = convertFrom.value;
    const toUnit = convertTo.value;

    if (!value) {
        conversionResult.textContent = "Please enter a valid number!";
        return;
    }

    let result;


    if (unitType.value === "length") {
        const lengthConversions = {
            meters: { meters: 1, kilometers: 0.001, miles: 0.000621371, feet: 3.28084 },
            kilometers: { meters: 1000, kilometers: 1, miles: 0.621371, feet: 3280.84 },
            miles: { meters: 1609.34, kilometers: 1.60934, miles: 1, feet: 5280 },
            feet: { meters: 0.3048, kilometers: 0.0003048, miles: 0.000189394, feet: 1 }
        };
        result = (value * lengthConversions[fromUnit][toUnit]).toFixed(2);
    }

    else if (unitType.value === "weight") {
        const weightConversions = {
            kilograms: { kilograms: 1, pounds: 2.20462, ounces: 35.274, grams: 1000 },
            pounds: { kilograms: 0.453592, pounds: 1, ounces: 16, grams: 453.592 },
            ounces: { kilograms: 0.0283495, pounds: 0.0625, ounces: 1, grams: 28.3495 },
            grams: { kilograms: 0.001, pounds: 0.00220462, ounces: 0.035274, grams: 1 }
        };
        result = (value * weightConversions[fromUnit][toUnit]).toFixed(2);
    }

    else if (unitType.value === "temperature") {
        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = (value * 9 / 5 + 32).toFixed(2);
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = ((value - 32) * 5 / 9).toFixed(2);
        } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            result = (value + 273.15).toFixed(2);
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            result = (value - 273.15).toFixed(2);
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            result = ((value - 32) * 5 / 9 + 273.15).toFixed(2);
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            result = ((value - 273.15) * 9 / 5 + 32).toFixed(2);
        } else {
            result = value.toFixed(2); 
        }
    }

    conversionResult.textContent = `Converted Value: ${result}`;
});
