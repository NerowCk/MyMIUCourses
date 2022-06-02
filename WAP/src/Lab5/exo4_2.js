'use strict';
export default  function multiplies(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}

let tab=[1,2,3,4,5,6]
console.log(multiplies(tab))
