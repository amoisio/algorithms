/**
 * Normalized the given data set (ie. all data points are within the unit square).
 * @param data Data set to normalize.
 */
export function normalize(data: number[]): number[] {
    let [min, max] = findMinMax(data);
    if (min == max) {
        return max == 0
            ? data.map(d => 0)
            : data.map(d => 1);
    } else {
        return data.map(d => (d - min) / (max - min));
    }
}

/**
 * Find min and max values along the given dimension.
 * @param dimension Dimension index along which to find min and max values.
 */
function findMinMax(data: number[]): [number, number] {
    let len = data.length;
    let min: number | undefined;
    let max: number | undefined;

    for (let i = 0; i < len; i++) {
        let temp = data[i];
        if (min === undefined || min > temp) {
            min = temp;
        }

        if (max === undefined || max < temp) {
            max = temp;
        }
    }

    if (min === undefined || max === undefined)
        throw new Error("Unable to find min,max of given data.");

    return [min, max];
}

export function linearizeQuadratic(data: number[]): number[] {
    return data.map(d => Math.sqrt(d));
}

export function linearizeCubic(data: number[]): number[] {
    return data.map(d => Math.cbrt(d));
}

export function linearizeExponential(data: number[]): number[] {
    return data.map(d => Math.log(d));
}

export function linearizeLogarithmic(data: number[]): number[] {
    return data.map(d => Math.exp(d));
}