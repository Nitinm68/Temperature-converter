function convertTemperature() {
    const tempValue = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('convertFrom').value;
    const toUnit = document.getElementById('convertTo').value;
  
    if (isNaN(tempValue)) {
      alert("Please enter a valid temperature.");
      return;
    }
  
    let convertedTemp;
  
    if (fromUnit === toUnit) {
      convertedTemp = tempValue; // Same unit
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      convertedTemp = (tempValue * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
      convertedTemp = tempValue + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      convertedTemp = (tempValue - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
      convertedTemp = (tempValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
      convertedTemp = tempValue - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
      convertedTemp = (tempValue - 273.15) * 9/5 + 32;
    }
  
    document.getElementById('convertedValue').innerText = `${convertedTemp.toFixed(2)} °${toUnit.charAt(0)}`;
    document.getElementById('result').style.display = "block";
  }
  