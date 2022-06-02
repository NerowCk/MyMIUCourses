'use strict';
export default  function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let tab=[1,2,3,4,5,6]
console.log(sum(tab))