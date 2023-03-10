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

// LECTURE: Basic Array Operations (Methods)
const neighbours = ['Panamá', 'Nicaragua', 'Rusia'];
neighbours.push('México');
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Nicaragua')] = `Republic of ${neighbours[neighbours.indexOf('Nicaragua')]}`;
console.log(neighbours);

// LECTURE: Introduction to Objects
const myCountry = {
    country: 'Costa Rica',
    capital: 'San José',
    language: 'spanish',
    population: 5,
    neighbours: ['Panamá', 'Nicaragua']
};

// LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people,
${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// LECTURE: Object Methods
const myCountry2 = {
    country: 'Costa Rica',
    capital: 'San José',
    language: 'spanish',
    population: 5,
    neighbours: ['Panamá', 'Nicaragua'],
    describe: function() {
        console.log(`${myCountry2.country} has ${myCountry2.population} ${myCountry2.language}-speaking people,
        ${myCountry2.neighbours.length} neighbouring countries and a capital called ${myCountry2.capital}.`);
    },
    checkIsland: function() {
       this.isIsland = this.neighbours.length === 0 ? true : false; 

        // Even simpler version (see why this works...)
        // this.isIsland = !Boolean(this.neighbours.length);
    }
};

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

// LECTURE: Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting.`);
};

// LECTURE: Looping Arrays, Breaking and Continuing
const populations2 = [10, 1441, 332, 83];
const percentages2 = [] 
for (let index = 0; index < populations2.length; index++) {
    const perc = percentageOfWorld1(populations2[index]);
    percentages2.push(perc);
}
console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) { 
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

// LECTURE: The while Loop
const percentages3 = [];
let i = 0;
while (i < percentages.length) {
    const perce = percentageOfWorld1(populations[i]);
    percentages3.push(perce);
    i++;
}
console.log(percentages3);