import ResizableArray, { alpha } from "./resizableArray";

describe('Resizable array', () => {

    it('Should construct an array with the given capacity', () => {
        let array = new ResizableArray<number>(4);

        expect(array.capacity).toBe(4);
    });

    it('Should return the desired array item on get', () => {
        let array = new ResizableArray<number>(4);
        array.push(1);
        array.push(2);
        array.push(3);

        expect(array.get(1)).toBe(2);
    });

    it('Should set the desired array item on set', () => {
        let array = new ResizableArray<number>(4);
        array.push(1);
        array.push(2);
        array.push(3);
        array.set(1, 20);

        expect(array.get(1)).toBe(20);
    });

    it('Should expand by a factor of alpha when more capacity is needed', () => {
        let array = new ResizableArray<number>(4);
        array.push(1);
        array.push(2);
        array.push(3);
        array.push(4);
        array.push(5);

        expect(array.capacity).toBe(4 * alpha);
    });

    it('Should push the value to the end of the list', () => {
        let array = new ResizableArray<number>(4);
        array.push(1);
        array.push(2);
        array.push(3);

        expect(array.get(2)).toBe(3);
    });

    it('Should contract the array by a factor of alpha when one fourth of the capacity is in use.', () => {
        let array = new ResizableArray<number>(4);
        array.push(1);
        array.push(2);
        array.push(3);
        array.push(4); 
        array.push(5); 
        array.pop(); 
        array.pop(); 
        array.pop(); 
        
        expect(array.capacity).toBe(4);
    });
});