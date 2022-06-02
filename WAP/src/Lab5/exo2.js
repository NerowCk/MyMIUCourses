'use strict';
export default  function maxOfThree(x, y, z) {
    let max = x > y ? x : y;
    max = max > z ? max : z;
    return max;
}
let a= maxOfThree(3,5,34)
console.log(a);