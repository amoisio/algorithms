import * as Generators from './generators';
import fs from 'fs';

let n = Number(process.argv[2]);
let empty = Number(process.argv[3]);
let filePath = process.argv[4];

let arr = Generators.numberGenerator(n, empty);
let arrStr = JSON.stringify(arr);
fs.writeFileSync(filePath, arrStr);
