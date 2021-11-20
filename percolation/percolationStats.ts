import Percolation from './percolation';
import Statistics from '../utilities/statistics';
import { UnionFindConstructor } from '../unionFind/iUnionFind';

export default class PercolationStats {

    private data: Array<number>;
    private statistics: Statistics;
    constructor(private n: number, private trials: number, private unionFind: UnionFindConstructor) {
        this.data = new Array<number>(trials);
        this.statistics = new Statistics();
    }

    // sample mean of percolation threshold
    public mean(): number {
        return this.statistics.mean;
    }

    // sample standard deviation of percolation threshold
    public stddev(): number {
        return this.statistics.stddev;
    }

    // low endpoint of 95% confidence interval
    public confidenceLo(): number {
        return this.statistics.confidenceLo;
    }

    // high endpoint of 95% confidence interval
    public confidenceHi(): number {
        return this.statistics.confidenceHi;
    }

    // test client (see below)
    public compute() {

        for (let i = 0; i < this.trials; i++) {

            let system = new Percolation(this.n, this.unionFind);

            while(!system.percolates()) {
                let row = Math.floor(Math.random() * this.n);
                let col = Math.floor(Math.random() * this.n);
                system.open(row, col);
            } 

            let openSites = system.numberOfOpenSites(); 
            let totalSites = this.n * this.n;
            this.data[i] = openSites / totalSites;
        }

        this.statistics.compute(this.data);
    }
}