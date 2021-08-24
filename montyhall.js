
const crypto = require('crypto');

const iterations = 100000
	, totalOptions = 3;

const getPosition = () => ((crypto.randomBytes(1).toString('ascii').charCodeAt(0)) % totalOptions) + 1 ;
// // const getPosition = () => Math.ceil(Math.random() * totalOptions);

let stay = 0,
	change = 0;

for (let i = 0; i < iterations; i++) {

	const options = [...Array(totalOptions)].map((_, index) => index + 1)
		, correctPosition = getPosition()
		, firstChoice = getPosition()
		, removedPosition = options.filter(option => option !== correctPosition && option !== firstChoice).slice(0, totalOptions - 2)
		, secondChoice = options.find(option => option !== firstChoice && !removedPosition.includes(option));

	stay += firstChoice === correctPosition ? 1 : 0;

	change += secondChoice === correctPosition ? 1 : 0;

}

console.log(`Stay: ${stay} / ${iterations}, Percentage: ${(stay/iterations*100).toFixed(3)}`);
console.log(`Change: ${change} / ${iterations}, Percentage: ${(change / iterations * 100).toFixed(3)}`);