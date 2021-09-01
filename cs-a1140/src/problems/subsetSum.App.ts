import { subsetSum0 } from "./subsetSum";

let set = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentSet: number[] = [];
let resultSet: number[][] = [];
subsetSum0(set, 0, 15, currentSet, resultSet);

console.log(resultSet);