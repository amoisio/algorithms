import ThreeSum from './threeSum';
import { performance } from 'perf_hooks';

console.log("ThreeSum program: ");

let ns = [1000, 2000, 3000, 4000, 5000];

for (let i = 0; i < ns.length; i++) {
    let n = ns[i];
    let numbers: number[] = [];

    // console.log("Generating numbers N: " + n);
    while (numbers.length < n) {
        let candidate = Math.round((Math.random() * 2 - 1) * 10000);
        if (!numbers.includes(candidate)) {
            numbers.push(candidate);
        }
    }

    let t0 = performance.now();
    let result = ThreeSum(numbers);
    let t1 = performance.now();
    let duration = Math.round((t1 - t0));

    console.log(n + ": " + result + " in " + duration + " ms");
}

//  196
// 1387
// 8596
// 65281