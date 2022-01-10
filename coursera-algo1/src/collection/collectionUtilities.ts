import ICollection from "./iCollection.js";

/**
 * Returns the contents of ICollection as an array.
 * @param collection Collection to read into an array.
 */
export function toArray<T>(collection: ICollection<T>): T[] {
    let result: T[] = [];
    for(let item of collection) {
        result.push(item);
    }
    return result;
}