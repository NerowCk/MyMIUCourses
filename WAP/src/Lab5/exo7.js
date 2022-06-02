'use strict'
export default function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

let words=['cherif', 'yasmine' , 'bannana', 'Nerow']
let i=6
console.log("the longest word than" + i + " are  [cherif, yasmine, bannana, Nerow] :" + filterLongWords(words,i))