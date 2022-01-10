import generateData from './dataGenerator.js';

let offset = 70;
let x = [100, 200, 400, 800, 1600, 3200];
console.log("x", x);

let [x0, y0] = generateData(x, (x: number) => offset, error);
console.log("O(1)", y0);

let [x1, y1] = generateData(x, (x: number) => x + offset, error);
console.log("O(N)", y1);

let [x2, y2] = generateData(x, (x: number) => Math.pow(x, 2) + offset, error);
console.log("O(N^2)", y2);

let [x3, y3] = generateData(x, (x: number) => Math.pow(x, 3) + offset, error);
console.log("O(N^3)", y3);

let [x4, y4] = generateData(x, (x: number) => Math.log2(x) + offset, error);
console.log("O(log(N))", y4);

console.log("end");
function error(): number {
    return (Math.random() * 2 - 1) * 0.02 * offset;
}