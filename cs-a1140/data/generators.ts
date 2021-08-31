export const numberGenerator = function (n: number, empty: number = 0.1): number[] {
    let array = new Array<number>();
    let counter = 1;
    while(array.length < n)
    {
        if (Math.random() < empty) {
            counter++;
            continue;
        }
        array.push(counter++);
    }

    for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * n);
        let tmp = array[index];
        array[index] = array[i];
        array[i] = tmp;
    }

    return array;
};