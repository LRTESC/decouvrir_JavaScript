// you can write js here

console.log('exo-5');

const input = prompt("Que voulez vous traduire");
const vowels = ["a", "e", "i", "o", "u", "y"];

let resultArray = [];

for (const letter of input) {
    if (vowels.indexOf(letter) !== -1) {
        resultArray.push(letter);
    }
}

console.log(resultArray.join("").toUpperCase());
