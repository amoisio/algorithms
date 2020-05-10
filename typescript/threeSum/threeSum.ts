// Problem 
// Given a set of N distinct integers, find all the number of triplets whose sum equals 0

export default function ThreeSum(numbers: number[]): number {
    let count: number = 0;
    let len = numbers.length;

    for(let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                if (numbers[i] + numbers[j] + numbers[k] == 0) {
                    count++;
                }
            }
        }
    }
    return count;
}
