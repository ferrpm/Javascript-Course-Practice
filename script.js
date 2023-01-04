// JavaScript Fundamentals – Part 1

// LECTURE: Values and Variables
// const country = 'Costa Rica'; 
// const continent = 'America';
// let population = 5;

// console.log(country);
// console.log(continent);
// console.log(population);

// // LECTURE: Data Types
// const isIsland = false
// let language 

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)

// // LECTURE: let, const and var
// language = 'spanish';

// // LECTURE: Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`
// console.log(description);

// // LECTURE: Taking Decisions: if / else Statements
// if (population > 33) {
//     console.log(`${country}'s population is above average.`);
// }else {
//     console.log(`${country}'s population is ${33 - population} millon below average.`);
// }

// // LECTURE: Type Conversion and Coercion
// console.log('9' - '5'); // -> 4
// console.log('19' - '13' + '17'); // -> '617'
// console.log('19' - '13' + 17); // -> 23
// console.log('123' < 57); // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// // LECTURE: Equality Operators: == vs. ===
// // let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// // if (numNeighbours === 1) {
// //     console.log('Only 1 border!');
// // } else if (numNeighbours > 1) {
// //     console.log('Mora than 1 border!');
// // } else {
// //     console.log('No borders!');
// // }

// // LECTURE: Logical Operators
// if ((language === 'english') && (population < 50) && !isIsland) {
//     console.log(`You should live in ${country}`);
// } else {
//     console.log(`${country} does not meet your criteria :(`)
// }

// // LECTURE: The switch Statement
// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//     case 'arabic':
//         console.log('5th most spoken language');
//     default:
//         console.log('Great language too :D!');
// }

// // LECTURE: The Conditional (Ternary) Operator
// console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);

// JavaScript Fundamentals – Part 2 

// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and it's capital city is ${capitalCity}`);
}

const descCostaRica = describeCountry('Costa Rica', 5, 'San José');
const descFinland = describeCountry('Finland', 6, 'Helsinki');
console.log(descCostaRica, descFinland);

// LECTURE: Function Declarations vs. Expressions
const percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
}

const percCostaRica = percentageOfWorld1(6);
console.log(percCostaRica);

// LECTURE: Arrow Functions
const calcAge = birthYear => 2037 - birthYear;

const percentageOfWorld3 = population => (population / 7900) * 100;

// LECTURE: Functions Calling Other Functions
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, 
    which is about ${percentage}% of the world.`;
    console.log(description)
}

describePopulation('Costa Rica', 5);

// LECTURE: Introduction to Arrays
const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);