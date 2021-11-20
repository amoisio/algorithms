let threshold = 10;
let iterations = 1000;
let counts = [];
let sum = 0;

for(let i = 0; i < iterations; i++) {
    let count = 1;
    while(threshold > Math.random() * 100) {
        count++;
    }
    counts[i] = count;
    sum += count;
    
    console.log(count);
}

console.log("average", sum/iterations);
