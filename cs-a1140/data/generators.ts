export const numberGenerator = function (n: number): number[] {
    let array = new Array<number>(n);
    for (let i = 0; i < n; i++) {
        array[i] = i;
    }

    for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * n);
        let tmp = array[index];
        array[index] = array[i];
        array[i] = tmp;
    }
    return array;
};