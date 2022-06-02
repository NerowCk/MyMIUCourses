'use strict'
export default function printOddNumbersOnly(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}

let numbers=[2,3,4,5,6,7,8,13,22]
console.log('Odd nummbers of the list [2,3,4,5,6,7,8,13,22] are ' + printOddNumbersOnly(numbers))

