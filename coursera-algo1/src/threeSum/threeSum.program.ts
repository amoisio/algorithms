import ThreeSum from './threeSum.js';
import { performance } from 'perf_hooks';
import DoublingMeasurer from '../performance/doublingMeasurer.js';

console.log("ThreeSum program:");

let ns = [250, 500, 1000, 2000, 4000];

for (let i = 0; i < ns.length; i++) {
    let n = ns[i];
    let numbers: number[] = [];

    // console.log("Generating numbers N: " + n);
    while (numbers.length < n) {
        let candidate = Math.round((Math.random() * 2 - 1) * 1000000);
        if (!numbers.includes(candidate)) {
            numbers.push(candidate);
        }
    }

    let t0 = performance.now();
    let result = ThreeSum(numbers);
    let t1 = performance.now();
    let duration = Math.round((t1 - t0));

    console.log(`${n}: ${duration}`);
}

console.log(`ThreeSumwith Doubling Measurer:`);
let items: number[] = [];
let measurer = new DoublingMeasurer("ThreeSum", 5, 250);
measurer.reset = resetFn;
measurer.execute = executeFn;
measurer.report = (count: number, duration: number) => {
    console.log(`${count}: ${duration}`);
}
measurer.getStatistics();

function resetFn(count: number) {
    items = [];
    while (items.length < count) {
        let candidate = Math.round((Math.random() * 2 - 1) * 1000000);
        if (!items.includes(candidate)) {
            items.push(candidate);
        }
    }
}

function executeFn(count: number) {
    ThreeSum(items);
}
