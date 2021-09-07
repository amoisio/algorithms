import InsertionSort from "./insertionSort";

describe('Insertion sort', () => {

    it('Should sort the given array in ascending order', () => {
        const array = [5, 2, 4, 6, 1, 3];

        InsertionSort.sort(array);

        expect(array).toEqual([1, 2, 3, 4, 5, 6]);
    });
});