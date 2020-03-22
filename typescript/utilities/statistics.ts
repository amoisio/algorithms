export default class Statistics {

    private _min ?: number;
    private _max ?: number;
    private _count ?: number;
    private _mean ?: number;
    private _median ?: number;
    private _variance ?: number;
    private _stddev ?: number;
    private _confidenceLo ?: number;
    private _confidenceHi ?: number;

    get min(): number {
        if (typeof this._min == "undefined") {
            throw new Error("Statistics not yet computed. Run compute first.");
        } else {
            return this._min;
        }
    }

    get max(): number {
        if (typeof this._max == "undefined") {
            throw new Error("Statistics not yet computed. Run compute first.");
        } else {
            return this._max;
        }
    }

    get count(): number {
        if (typeof this._count == "undefined") {
            throw new Error("Statistics not yet computed. Run compute first.");
        } else {
            return this._count;
        }
    }

    get mean(): number {
        if (typeof this._mean == "undefined") {
            throw new Error("Statistics not yet computed. Run compute first.");
        } else {
            return this._mean;
        }
    }

    get median(): number {
        if (typeof this._median == "undefined") {
            throw new Error("Statistics not yet computed. Run compute first.");
        } else {
            return this._median;
        }
    }

    get variance(): number {
        if (typeof this._variance == "undefined") {
            throw new Error("Statistics not yet computed. Run compute first.");
        } else {
            return this._variance;
        }
    }

    get stddev(): number {
        if (typeof this._stddev == "undefined") {
            throw new Error("Statistics not yet computed. Run compute first.");
        } else {
            return this._stddev;
        }
    }

    get confidenceLo(): number {
        if (typeof this._confidenceLo == "undefined") {
            throw new Error("Statistics not yet computed. Run compute first.");
        } else {
            return this._confidenceLo;
        }
    }

    get confidenceHi(): number {
        if (typeof this._confidenceHi == "undefined") {
            throw new Error("Statistics not yet computed. Run compute first.");
        } else {
            return this._confidenceHi;
        }
    }

    /**
     * Compute statistics
     */
    public compute(data: number[]) {
        if (data === undefined || data === null || data.length == 0)
            throw new Error("Insufficient data");

        let sortedData = data.sort((a, b) => a - b);            

        this._count = data.length;
        this._min = sortedData[0];
        this._max = sortedData[this._count - 1];
        this._mean = this.computeMean(data);
        this._median = this.computeMedian(sortedData);
        this._variance = this.computeVariance(data, this._mean);
        this._stddev = Math.sqrt(this._variance);
        this._confidenceLo = this.computeConfidenceLo(this._mean, this._stddev, this._count);
        this._confidenceHi = this.computeConfidenceHi(this._mean, this._stddev, this._count);
    }

    private computeMean(data: number[]) : number {
        let sum = data.reduce((prev, next) => prev + next);
        let len = data.length;
        return sum / len;
    }

    private computeMedian(sortedData: number[]) : number {
        let medianIndex = Math.floor(sortedData.length / 2);
        return sortedData[medianIndex];
    }

    private computeVariance(data: number[], mean: number): number {
        let len = data.length;
        let dist = data.map(d => Math.pow(d - mean, 2))
            .reduce((prev, next) => prev + next);
        return dist / (len - 1);
    }

    private computeConfidenceLo(mean: number, stddev: number, count: number) {
        return mean - 1.96 * stddev / Math.sqrt(count);
    }

    private computeConfidenceHi(mean: number, stddev: number, count: number) {
        return mean + 1.96 * stddev / Math.sqrt(count);
    }
}