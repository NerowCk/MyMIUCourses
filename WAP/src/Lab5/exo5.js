'use strict '
export default function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log('reversed String of \" Cherif \' ' + reverse('cherif'))