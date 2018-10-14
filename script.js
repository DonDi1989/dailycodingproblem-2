const result = getResult([1, 2, 3, 4, 5]);

function getResult(numbers) {
	return numbers.map((number, index) => {
		let updatedNumbers = numbers.slice(0);
		updatedNumbers.splice(index, 1);
		return updatedNumbers.reduce((a, b) => a*b);
	});
}

$("#result").html(result.toString());