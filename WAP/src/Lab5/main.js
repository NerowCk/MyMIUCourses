import max from "./exo1.js"
import maxOfThree from './exo2.js'
import isVowel from './exo3.js'
import sum from './exo4_1.js'
import multiplies from './exo4_2.js'
import reverse from './exo5.js'
import findLongestWord from './exo6.js'
import filterLongWords from './exo7.js'
import computeSumOfSquares from './exo8.js'
import printOddNumbersOnly from './exo9.js'
import computeSumOfSquaresOfEvensOnly from './exo10.js'
import sumWithReduce from './exo11_1.js'
import multipliesWithReduce from './exo11_2.js'
import findSecondBiggest from './exo12.js'
import printFibo from './exo13.js'

import printResults from './resultsPrinter.js'
function main (){
    printResults('1. max(1,3)', max(1, 3))
    printResults('2. maxOfThree(4,38, 55)',  maxOfThree(4, 38, 55))
    printResults('3. isVowel("e")',  isVowel('e'))
    printResults('4.1. sum([3,4,5,6,8,95,2])', sum([3, 4, 5, 6, 8, 95, 2]))
    printResults('4.2. multiplies([3,4,5,6,8,95,2])',  multiplies([3, 4, 5, 6, 8, 95, 2]))
    printResults('5. reverse("cherif kadri")',  reverse("neit hnahk"))
    printResults('6. findLongestWord(["cherif","yasmine", "bannana"," Nerow"])',  findLongestWord(['cherif', 'yasmine' , 'bannana', 'Nerow']))
    printResults('7. filterLongWords(["cherif","yasmine", "bannana"," Nerow"], 4)',  filterLongWords(["cherif","yasmine", "bannana"," Nerow"], 4))
    printResults('8. computeSumOfSquares([4,5,6])', computeSumOfSquares([4, 5, 6]))
    printResults('9. printOddNumbersOnly([12,33,24,41])',  printOddNumbersOnly([12, 33, 24, 41]))
    printResults('10. computeSumOfSquaresOfEvensOnly([3,4,6,7,8,9])',  computeSumOfSquaresOfEvensOnly([3, 4, 6, 7, 8, 9]))
    printResults('11.1. sumWithReduce([3, 4, 5, 6, 8, 95, 2])',  sumWithReduce([3, 4, 5, 6, 8, 95, 2]))
    printResults('11.2. multipliesWithReduce([3, 4, 5, 6, 8, 95, 2])',  multipliesWithReduce([3, 4, 5, 6, 8, 95, 2]))
    printResults('12. findSecondBiggest([19,9,11,0,12])',  findSecondBiggest([19, 9, 11, 0, 12]))
    printResults('13. printFibo(10,0,1)',  printFibo(10, 0, 1));
}

function startClock() {
    setInterval(ticking, 1000);
}

function ticking() {
    let date = new Date();
    document.getElementById("year").innerHTML = date.getFullYear();
    document.getElementById("month").innerHTML = date.getMonth() + 1;
    document.getElementById("date").innerHTML = date.getDate();
    document.getElementById("hour").innerHTML = date.getHours();
    document.getElementById("minute").innerHTML = date.getMinutes();
    document.getElementById("seconds").innerHTML = date.getSeconds();
}
(startClock())
console.log(main())

