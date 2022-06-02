'use strict'
export default function computeSumOfSquaresOfEvensOnly(numbers) {
    return numbers
        .filter(num => num % 2 === 0)
        .reduce((x, y) => x + Math.pow(y, 2));
}
let numbers=[2,3,4,5,6,7,8,13,22]
console.log(computeSumOfSquaresOfEvensOnly(numbers))