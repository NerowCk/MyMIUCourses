'use strict'
export default function sumWithReduce(numbers) {
    return numbers.reduce((x, y) => x + y);
}

let numbers=[1,2,3,4,5,6,7,8]
console.log(sumWithReduce(numbers))