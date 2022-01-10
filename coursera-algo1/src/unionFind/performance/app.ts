import IUnionFind from '../iUnionFind.js';
import QuickFind from '../quickFind.js';
import QuickUnion from '../quickUnion.js';
import WeightedQuickUnion from '../weightedQuickUnion.js';
import iUnionFind from '../iUnionFind.js';
import PerformanceWrapper from './performanceWrapper.js';
import { PerformanceStatistics } from '../../performance/performanceMeasurements.js';
import WQUPC from '../wqupc.js';

// Counts of items and operations
const counts: number[] = [10, 
    100, 
    1000, 
    10000,
    50000,
    100000, 
    150000,
    200000,
    1000000];

const createUnionFindCases: (initialSize: number) => { name: string, algorithm: iUnionFind }[]
    = (initialSize: number) => [
        // { name: "quickFind", algorithm: new QuickFind(initialSize) },
        // { name: "quickUnion", algorithm: new QuickUnion(initialSize) },
        { name: "wqu", algorithm: new WeightedQuickUnion(initialSize) },
        { name: "wqupc", algorithm: new WQUPC(initialSize) }
    ];

const createPerformanceWrapper: (name: string, unionFind: iUnionFind, capacity: number) => PerformanceWrapper = 
    (name: string, unionFind: iUnionFind, capacity: number) => new PerformanceWrapper(name, unionFind, capacity);

const generateTestData: (n: number,max: number) => Array<[number, number]> = (n: number,max: number) => {
    let data: Array<[number, number]> = [];
    for (let i = 0; i < max; i++) {
        let low = Math.round(Math.random() * (max - 1))
        let high = Math.round(Math.random() * (max - 1))
        data.push([low, high]);
    }
    return data;
}

const stats: PerformanceStatistics[] = [];

for (let itemCount of counts) {
    let cases = createUnionFindCases(itemCount);
    let data = generateTestData(itemCount, itemCount);

    for(let ufCase of cases) {
        let unionFind = createPerformanceWrapper(ufCase.name, ufCase.algorithm, itemCount);

        for(let point of data) {
            unionFind.union(point[0], point[1]);
        }

        let statistics = unionFind.getStatistics();
        stats.push(statistics);
    }
}

let sorted = stats.sort((a, b) => {
    if (a.algorithm == b.algorithm)
        return a.statistics.count - b.statistics.count;
    else if (a.algorithm < b.algorithm)
        return -1;
    else 
        return 1;
});

for (let s of sorted) {
    console.log(`${s.algorithm} (${s.statistics.count}) - avg: ${s.statistics.mean}, median: ${s.statistics.median}`);
}
 



