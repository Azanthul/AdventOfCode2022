const {readFileSync, promises: fsPromises} = require('fs');
const { empty } = require('prelude-ls');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);

    console.log(arr);
}

let guide = syncReadFile('./day2.txt');