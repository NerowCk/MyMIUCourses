'use strict'
export default function  findSecondBiggest(numbers) {
    let first =  Number.MIN_VALUE;
    let second = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i];
        } else if (numbers[i] !== first && numbers[i] > second) {
            second = numbers[i];
        }
    }

    return second;
}

let numbers=[1,23,3,4,55,667,5,56,77,453]
console.log(findSecondBiggest(numbers))
