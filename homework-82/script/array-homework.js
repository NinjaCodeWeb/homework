const numbers = [2, 41, 5, 7, 6, 12, 1, 9, 59]

function arrayReassemble(array, value) {
	const largerNumbers = [];

	for (let index = 0; index < array.length; index++) {
		if (array[index] > value) {
			largerNumbers.push(array[index])
		}
	}

	if (largerNumbers.length > 0) {
		return largerNumbers
	} else {
		return `В данном массиве нет элементов больше ${value} этого значения`
	}
}

console.log(arrayReassemble(numbers, 10))