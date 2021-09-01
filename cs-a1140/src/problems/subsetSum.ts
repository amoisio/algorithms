/**
 * Finds all subset sums which equal a target value.
 * Note! this version of the algorithm assumes set contains only natural numbers.
 */
export const subsetSum0 = function (set: number[], startIndex: number, targetValue: number, currentSet: number[], resultSets: number[][]) {
    let len = set.length;
    if (len == startIndex) {
        return;
    }

    for (let i = startIndex; i < len; i++) {
        let currentValue = set[i];
        if (currentValue == targetValue) {
            resultSets.push([...currentSet, currentValue]);
            continue;
        }

        let nextValue = targetValue - currentValue;
        if (nextValue > 0)
            subsetSum0(set, i + 1, nextValue, [...currentSet, currentValue], resultSets);
    }
}