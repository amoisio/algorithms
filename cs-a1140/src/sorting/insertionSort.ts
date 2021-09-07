export default class InsertionSort {

    /**
     * Sorts the array with insertion sort.
     * Loop invariant
     *  At each iteration i the sub-array [0..i-1] contains the original items [0..i-1]
     *  but in a sorted order.
     * @param array Array to sort.
     */
    public static sort<T>(array: T[]): void {
        const len = array.length;
        for (let i = 0; i < len; i++) {
            this.sortSubArray(array, i);
        }
    }

    private static sortSubArray<T>(array: T[], index: number): void {
        const item = array[index];
        for (let i = index - 1; i >= 0; i--) {
            const comp = array[i];
            if (item < comp) {
                array[i + 1] = comp;
                array[i] = item;
            } else {
                break;
            }
        }
    }
}