import RandomizedQueue from './randomizedQueue';
import {toArray} from "../collection/collectionUtilities";

describe('RandomizedQueue operation', () => {
    
    test('Calling queue with a null argument throws an error', () => {
        let rq = new RandomizedQueue<any>();
        expect(() => rq.queue(null)).toThrow();
    });

    test('Calling queue with an undefined argument throws an error', () => {
        let rq = new RandomizedQueue<any>();
        expect(() => rq.queue(undefined)).toThrow();
    });

    test('IsEmpty returns true for a queue that has no items in it', () => {
        let rq = new RandomizedQueue<number>();
        expect(rq.isEmpty()).toBeTruthy();
    });

    test('IsEmpty returns false for a queue that has items in it', () => {
        let rq = new RandomizedQueue<number>();
        rq.queue(1);
        expect(rq.isEmpty()).toBeFalsy();
    });

    test('IsEmpty returns true for a queue after the last item has been removed from it', () => {
        let rq = new RandomizedQueue<number>();
        rq.queue(1);
        rq.dequeue();
        expect(rq.isEmpty()).toBeTruthy();
    });

    test('Calling dequeue for an empty queue throws an error', () => {
        let rq = new RandomizedQueue<number>();
        expect(() => rq.dequeue()).toThrow();
    });

    test('Calling sample for an empty queue throws an error', () => {
        let rq = new RandomizedQueue<number>();
        expect(() => rq.sample()).toThrow();
    });

    test('Iterating over the queue returns a randomized queue', () => {
        let rq = new RandomizedQueue<number>();
        rq.queue(0);
        rq.queue(1);
        rq.queue(2);
        rq.queue(3);
        rq.queue(4);
        rq.queue(5);
        rq.queue(6);
        rq.queue(7);
        rq.queue(8);
        rq.queue(9);

        let arr1 = toArray(rq);
        let arr2 = toArray(rq);
        expect(arr1).not.toStrictEqual(arr2);
    });

    test('Iterating over the queue returns a all the queue items', () => {
        let rq = new RandomizedQueue<number>();
        rq.queue(0);
        rq.queue(1);
        rq.queue(2);
        rq.queue(3);
        rq.queue(4);
        rq.queue(5);
        rq.queue(6);
        rq.queue(7);
        rq.queue(8);
        rq.queue(9);

        let arr = toArray(rq);
        expect(arr.includes(0)).toBeTruthy();
        expect(arr.includes(1)).toBeTruthy();
        expect(arr.includes(2)).toBeTruthy();
        expect(arr.includes(3)).toBeTruthy();
        expect(arr.includes(4)).toBeTruthy();
        expect(arr.includes(5)).toBeTruthy();
        expect(arr.includes(6)).toBeTruthy();
        expect(arr.includes(7)).toBeTruthy();
        expect(arr.includes(8)).toBeTruthy();
        expect(arr.includes(9)).toBeTruthy();
    });
});
