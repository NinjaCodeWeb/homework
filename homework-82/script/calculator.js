function sumNumbers(firstNumber, secondNumber, operator) {
	switch(operator) {
		case '+':
			return firstNumber + secondNumber
		case '-':
			return firstNumber - secondNumber
		case '*':
			return firstNumber * secondNumber
		case '/':
			return firstNumber / secondNumber
		default:
			return 'Неверный оператор'
	}
}

const rezult = sumNumbers(10, 5, '-')
console.log(rezult)