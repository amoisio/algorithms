const binarySearch = function <TType>(array: TType[], element: TType, compareFn ?: (a: TType, b: TType) => number | undefined): boolean {
    if (array === undefined || array === null || array.length == 0)
        return false;
    
    let comparison = compareFn 
        ? compareFn
        : (a: TType, b: TType) => {
            if (a == b) return 0;
            if (a < b) return -1;
            else return 1;
          };

    let rmax = array.length - 1;
    let rmin = 0;
    let rindex = Math.floor((rmax - rmin) / 2) + rmin;
    let val: number | undefined;
    while ((val = comparison(array[rindex], element)) != 0) {
        if (val == -1) rmin = rindex;
        else rmax = rindex;
        let tindex = Math.floor((rmax - rmin) / 2) + rmin;
        if (rindex == tindex) return false;
        else rindex = tindex;
    }
    return true;
}

export default binarySearch;