import MergeSort from "./mergeSort";

describe('Merge sort', () => {

    it('Should sort the given array in ascending order', () => {
        const array = [2, 4, 5, 7, 1, 2, 3, 6];

        MergeSort.sort(array);

        expect(array).toEqual([1, 2, 2, 3, 4, 5, 6, 7]);
    });

    it('Should sort the given array in descending order', () => {
        const array = [2, 4, 5, 7, 1, 2, 3, 6];

        MergeSort.sort(array, true);

        expect(array).toEqual([7, 6, 5, 4, 3, 2, 2, 1]);
    });
});