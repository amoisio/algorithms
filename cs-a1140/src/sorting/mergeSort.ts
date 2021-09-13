export default class MergeSort {

    /**
     * Sorts the array by MergeSort
     */
    public static sort<T>(array: T[], desc: boolean = false): void {
        const len = array.length;
        this.mergeSort(array, 0, len - 1, desc);
    }

    /**
     * Divide the subarray [start..end] into two subarrays sort them with mergeSort 
     * and merge.
     * @param array Array to sort.
     * @param start Subarray start index.
     * @param end Subarray end index.
     */
    private static mergeSort<T>(array: T[], start: number, end: number, desc: boolean = false): void {
        const range = end - start + 1;
        if (range > 1) {
            const mid = start + Math.floor(range / 2) - 1;
            this.mergeSort(array, start, mid, desc);
            this.mergeSort(array, mid + 1, end, desc);
            this.merge(array, start, mid, end, desc);
        }
    }

    private static merge<T>(array: T[], p: number, q: number, r: number, desc: boolean = false) {
        const temp: T[] = [];
        let lIndex = p;
        const lMax = q;
        let rIndex = q + 1;
        const rMax = r;
        while (lIndex <= lMax && rIndex <= rMax) {
            let leftValue = array[lIndex];
            let rightValue = array[rIndex];
            if (desc ? rightValue < leftValue : leftValue < rightValue) {
                temp.push(leftValue);
                lIndex++;
            } else {
                temp.push(rightValue);
                rIndex++;
            }
        }

        for (let i = lIndex; i <= lMax; i++) {
            temp.push(array[i]);
        }

        for (let i = rIndex; i <= rMax; i++) {
            temp.push(array[i]);
        }

        for (let i = p; i <= r; i++) {
            array[i] = temp[i - p];
        }
    }
}