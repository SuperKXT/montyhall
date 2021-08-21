
const crypto = require('crypto');

const getPosition = () => (crypto.getRandomValues(new Uint8Array(2)) % 3) + 1 ;

const iterations = 100;

let stay = 0,
	change = 0;

for (let i = 0; i < iterations; i++) {

	const options = [1,2,3]
		, [correctPosition, firstChoice] = getPosition()
		, removedPosition = options.find(option => option !== correctPosition && option !== firstChoice)
		, secondChoice = options.find(option => option !== firstChoice && option !== removedPosition);

	stay += firstChoice === correctPosition ? 1 : 0;

	console.log(correctPosition + ' ' + firstChoice + ' ' + secondChoice);

	change += secondChoice === correctPosition ? 1 : 0;

}

console.log(`Stay: ${stay} / ${iterations}, Percentage: ${stay/iterations*100}`);
console.log(`Change: ${change} / ${iterations}, Percentage: ${change / iterations * 100}`);