const {readFileSync, promises: fsPromises} = require('fs');
const { empty } = require('prelude-ls');

function syncReadFile(filename) {
    const arr = readFileSync(filename, 'utf-8').split(/\r?\n/);
    const blocks = []
    let sum = 0;

    for (let i=0; i<arr.length; i++) {
      if(arr[i] == "")
        {
          blocks.push(sum);
          sum = 0;
          continue
        }
      sum = sum + Number(arr[i]);  
    }
    blocks.push(sum);
    return blocks;
  }
  
function bubbleSort(array) {
  for(var i = 0; i <= array.length-1; i++) {
      for(var j = 0; j < ( array.length - i -1); j++) {
          if(array[j] > array[j+1]) {
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
          }
      }
  }
}

function sumUp(arrayOfCalories)
  { 
    let lastElements = arrayOfCalories.slice(-3)
    let total = lastElements.reduce((acc, num) => {
      return acc + num
    }, 0)
    return total;
  }

let arrayOfCalories = syncReadFile('day1_part2/day1.txt'); // Array erstellen
bubbleSort(arrayOfCalories); // Sortieren
console.log(sumUp(arrayOfCalories));