import WQUPC from '../unionFind/weightedQuickUnion';
import PercolationStats from './percolationStats';

const gridSize = 100;
const trials = 100;
const algorithm = WQUPC;

let stats = new PercolationStats(gridSize, trials, algorithm);

stats.compute();

console.log(`mean    : ${stats.mean()}`);
console.log(`stddev  : ${stats.stddev()}`);
console.log(`95% int : [${stats.confidenceLo()}, ${stats.confidenceHi()}]`);