import SelectionSort from "./selectionSort";

describe('Selection sort', () => {

    it('Should sort the given array in ascending order', () => {
        const array = [5, 2, 4, 6, 1, 3];

        SelectionSort.sort(array);

        expect(array).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('Should sort the given array in descending order', () => {
        const array = [5, 2, 4, 6, 1, 3];

        SelectionSort.sort(array, true);

        expect(array).toEqual([6, 5, 4, 3, 2, 1]);
    });
});