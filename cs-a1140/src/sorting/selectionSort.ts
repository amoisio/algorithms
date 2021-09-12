export default class SelectionSort {

    /**
     * Sorts the array by
     * 1) Look for ith smallest item in the array during iteration i.
     * 2) Once found, swap it with the ith item.
     * 
     * Loop invariant
     *  When iterating for item in index i, the sub-array [0..i-1] contains values such that
     *  a0 <= ... <= ai-i <= ai.
     * Initial step: When i = 0, the sub-array is empty. At the end of iteration the sub-array consists 
     *  of a single item.
     * Final step: When i = n - 1, the sub-array is already sorted and only a single item remains to be looked at
     *  (the last item in the array); however, since ai <= an-1 for all i. We have can conclude the algorithm as the array
     *  is already sorted.     * 
     * @param array Array to sort.
     * @param desc Set to true to sort the array in descending order.
     */
    public static sort<T>(array: T[], desc: boolean = false): void {
        const len = array.length;
        for (let i = 0; i < len - 1; i++) {
            let swapIndex = desc 
                ? this.findIndexOfLargestItem(array, i)
                : this.findIndexOfSmallestItem(array, i);
            
            if (swapIndex != i) {
                let temp = array[i];
                array[i] = array[swapIndex];
                array[swapIndex] = temp;
            }
        }
    }

    private static findIndexOfSmallestItem<T>(array: T[], index: number): number {
        const len = array.length;
        let temp = array[index];
        let minIndex = index;
        for (let i = index + 1; i < len; i++) {
            const current = array[i];
            if (current < temp) {
                temp = current;
                minIndex = i;
            }
        }
        return minIndex;
    }

    private static findIndexOfLargestItem<T>(array: T[], index: number): number {
        const len = array.length;
        let temp = array[index];
        let maxIndex = index;
        for (let i = index + 1; i < len; i++) {
            const current = array[i];
            if (current > temp) {
                temp = current;
                maxIndex = i;
            }
        }
        return maxIndex;
    }
}