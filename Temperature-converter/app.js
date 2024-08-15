document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let convertedTemp;

    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            convertedTemp = (tempInput * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            convertedTemp = tempInput + 273.15;
        } else {
            convertedTemp = tempInput;
        }
    } else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            convertedTemp = (tempInput - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            convertedTemp = ((tempInput - 32) * 5/9) + 273.15;
        } else {
            convertedTemp = tempInput;
        }
    } else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            convertedTemp = tempInput - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            convertedTemp = ((tempInput - 273.15) * 9/5) + 32;
        } else {
            convertedTemp = tempInput;
        }
    }

    document.getElementById('result').innerText = `${convertedTemp.toFixed(2)} ${toUnit}`;
});