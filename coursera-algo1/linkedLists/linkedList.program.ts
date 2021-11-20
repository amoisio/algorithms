import LinkedList from './linkedList';
import DoublingMeasurer from '../performance/doublingMeasurer';

console.log(`Linked list addition:`);
let measurer = new DoublingMeasurer("LinkedList addition", 10, 250);

let list: LinkedList<number>; 
measurer.reset = (count: number) => {
    list = new LinkedList();
};
measurer.execute = (count: number) => {
    for(let i = 0; i < count; i++) {
        list.add(Math.round(Math.random() * 1000000));
    }
};
measurer.report = (count: number, duration: number) => {
    console.log(`${count}: ${duration}`);
}
measurer.getStatistics();

console.log(`Linked list removal from random index:`);
let removeMeasurer = new DoublingMeasurer("LinkedList removal", 10, 250);
removeMeasurer.reset = (count: number) => {
    list = new LinkedList();
    for(let i = 0; i < count; i++) {
        list.add(Math.round(Math.random() * 1000000));
    }
};
removeMeasurer.execute = (count: number) => {
    let size = list.size();
    for(let i = 0; i < size; i++) {
        list.remove();
    }
};

removeMeasurer.report = (count: number, duration: number) => {
    console.log(`${count}: ${duration}`);
}
removeMeasurer.getStatistics();
