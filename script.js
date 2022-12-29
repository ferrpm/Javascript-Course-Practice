// LECTURE: Values and Variables
const country = 'Costa Rica'; 
const continent = 'America';
let population = 5;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
const isIsland = false
let language 

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

// LECTURE: let, const and var
language = 'spanish';

// LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average.`);
}else {
    console.log(`${country}'s population is ${33 - population} millon below average.`);
}

// LECTURE: Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143