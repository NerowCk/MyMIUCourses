'use strict';
export default  function isVowel(letter) {
    let vowels = 'aeiou';
    return vowels.indexOf(letter.toLowerCase()) > -1;
}

console.log(isVowel('e'));