const search = function<TType>(array: TType[], item: TType): boolean {
    if (array === null || array === undefined || array.length == 0)
        return false;

    let len = array.length;
    for (let i = 0; i < len; i++) {
        if (array[i] == item)
            return true;
    }
    return false;
}

export default search;