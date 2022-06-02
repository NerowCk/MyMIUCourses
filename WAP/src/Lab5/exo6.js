'use strict '
export default  function findLongestWord(words) {
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (maxLength < words[i].length) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

let words=['cherif', 'yasmine' , 'bannana', 'Nerow']
console.log('The length of the longest word of [cherif, yasmine, bannana, Nerow] :' + findLongestWord(words))