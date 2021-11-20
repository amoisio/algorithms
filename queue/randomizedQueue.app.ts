import RandomizedQueue from "./randomizedQueue";

let rq = new RandomizedQueue<number>();
let count = 10;

console.log(`Load ${count} items into randomized queue.`);
console.log(`Queue empty? ${rq.isEmpty()}.`);

let maxValue = 10;
for (let i = 0; i < count; i++) {
    rq.queue(i);    
}

console.log("Loading done.");
console.log(`Queue size is ${rq.size()}.`);
console.log(`Queue empty? ${rq.isEmpty()}.`);

console.log("First iteration");
for (let item of rq) {
    console.log(item);
}

console.log("Second iteration");
for (let item of rq) {
    console.log(item);
}