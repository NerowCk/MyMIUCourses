'use strict'
// function printFibo(n, a, b) {
//     let c=n
//     for(let i = 2; i <= n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//       }
      
//       return c; 
// }

export default function printFibo(n, a, b) {
    let x = a, y = b, count = n, temp, fibo = [];
    while (count > 0) {
        temp = x;
        x = x + y;
        y = temp;
        fibo.push(y);
        count--;
    }
   return fibo
}
console.log(printFibo(10,0,1))