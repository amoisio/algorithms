import WQUPC from '../unionFind/weightedQuickUnion.js';
import PercolationStats from './percolationStats.js';

const gridSize = 200;
const trials = 1000;
const algorithm = WQUPC;

let stats = new PercolationStats(gridSize, trials, algorithm);

stats.compute();

console.log(`mean    : ${stats.mean()}`);
console.log(`stddev  : ${stats.stddev()}`);
console.log(`95% int : [${stats.confidenceLo()}, ${stats.confidenceHi()}]`);