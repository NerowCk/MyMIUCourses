'use strict'
export default function computeSumOfSquares(numbers, ) {
    return numbers.reduce((x, y) => x + Math.pow(y, 2));
}
let numbers=[4,5,6]
console.log( "The sum of quares of 4, 5, 6 is " +computeSumOfSquares(numbers))
