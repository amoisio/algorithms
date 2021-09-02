import ResizableInt16Array from "./resizableArray";

let array = new ResizableInt16Array(1);

for(let i = 0; i < 10; i++) {
    array.push(i);
    array.print();
}