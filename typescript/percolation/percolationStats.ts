import Percolation from './percolation';
import WQUPC from '../unionFind/wqupc';

export default class PercolationStats {

    private data: Array<number>;
    constructor(private n: number, private trials: number) {
        this.data = new Array<number>(trials);
    }

    // sample mean of percolation threshold
    public mean(): number {
        let sum = this.data
            .reduce((prev, next) => prev + next);
        return sum / this.trials;
    }

    // sample standard deviation of percolation threshold
    public stddev(): number {
        let mean = this.mean();
        let sum = this.data
            .map(d => Math.pow(d - mean, 2))
            .reduce((prev, next) => prev + next);
        let variance = sum / (this.trials - 1);

        return Math.sqrt(variance);
    }

    // low endpoint of 95% confidence interval
    public confidenceLo(): number {
        let mean = this.mean();
        let stddev = this.stddev();
        return mean - 1.96*stddev/Math.sqrt(this.trials);
    }

    // high endpoint of 95% confidence interval
    public confidenceHi(): number {
        let mean = this.mean();
        let stddev = this.stddev();
        return mean + 1.96*stddev/Math.sqrt(this.trials);
    }

    // test client (see below)
    public compute() {

        for (let i = 0; i < this.trials; i++) {

            let system = new Percolation(this.n, WQUPC);

            while(!system.percolates()) {
                let row = Math.floor(Math.random() * this.n);
                if (row == this.n)
                    row = this.n - 1;

                let col = Math.floor(Math.random() * this.n);
                if (col == this.n)
                    col = this.n - 1;

                system.open(row, col);
            } 

            this.data.push(system.numberOfOpenSites());
        }
    }
}