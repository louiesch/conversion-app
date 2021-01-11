function multiply(number1) {
	return number1 * 3.785411784
}

const number1 = parseFloat(prompt("Enter how many gallons"))

const result = multiply(number1);
alert(result + " liters")