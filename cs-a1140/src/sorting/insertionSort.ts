export default class InsertionSort {

    /**
     * Sorts the array with insertion sort.
     * Loop invariant
     *  At each iteration i the sub-array [0..i-1] contains the original items [0..i-1]
     *  but in a sorted order.
     * @param array Array to sort.
     * @param desc Set to true to sort the array in descending order.
     */
    public static sort<T>(array: T[], desc: boolean = false): void {
        const len = array.length;
        for (let i = 1; i < len; i++) {
            this.sortSubArray(array, i, desc);
        }
    }

    private static sortSubArray<T>(array: T[], index: number, desc: boolean): void {
        const item = array[index];
        for (let i = index - 1; i >= 0; i--) {
            const comp = array[i];

            if ((desc && item > comp) || (!desc && item < comp)) {
                array[i + 1] = comp;
                array[i] = item;
            } else {
                break;
            }
        }
    }
}