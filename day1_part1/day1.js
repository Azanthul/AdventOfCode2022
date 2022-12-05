const {readFileSync, promises: fsPromises} = require('fs');
const { empty } = require('prelude-ls');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    let sum = 0;
    let bigBoy = 0;

    for (let i=0; i<arr.length; i++) {
      if(arr[i] == "")
        {
          if(sum >= bigBoy)
              {
                bigBoy = sum;
              }
          sum = 0;
        }
      else
        {
          sum = sum + Number(arr[i]);
        }    
    }

    if(sum > bigBoy)
      {
        bigBoy = sum;
      }
    return bigBoy;
  }
  
let calories = syncReadFile('day1_part1/day1.txt');
console.log(calories);