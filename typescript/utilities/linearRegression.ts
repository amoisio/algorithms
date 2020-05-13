/**
 * Computes a linear model f(x) = ax + b for the given data.
 */
export default class LinearRegression {
    private readonly _data: [number, number][];
    private _xRange: [number, number] | undefined;
    private _yRange: [number, number] | undefined;

    constructor(data: [number, number][]) {
        this._data = data;
    }

    /**
     * Determines if data should be normalized before running linear regression.
     */
    public normalize: boolean = false;

    /**
     * Model coefficient a.
     */
    public a: number | undefined;

    /**
     * Model coefficient b.
     */
    public b: number | undefined;

    /**
     * Model error.
     */
    public e: number | undefined;

    /**
     * Computes the model error.
     */
    public computeError(): void {
        if (this.a === undefined || this.b === undefined) {
            throw new Error("Model not computed.");
        }
        var a = this.a;
        var b = this.b;

        this. e = this._data
            .map(value => Math.pow(value[1] - (a*value[0] + b), 2))
            .reduce((previous, current) => previous + current);
    }

    /**
     * Computes the model parameters.
     */
    public computeModel(): void {
        if(this.normalize) {
            this.normalizeData();
        }   

        let n = this._data.length;

        let [sx, sy] = this._data.reduce((prev, current) => [prev[0] + current[0], prev[1] + current[1]], [0, 0]);

        let sxy = this._data
            .map((value) => value[0] * value[1])
            .reduce((prev, current) => prev + current);

        let sxx = this._data
            .map((value) => value[0] * value[0])
            .reduce((prev, current) => prev + current);

        this.b = (sxx * sy - sx*sxy) / (n*sxx - sx * sx);
        this.a = (sy - n*this.b) / sx;   
    }

    /**
     * Normalizes the data set so that all data points are within the unit square.
     */
    private normalizeData(): void {
        let len = this._data.length;
        for(let i = 0; i < len; i++) {
            this._data[i][0] = (this._data[i][0] - this.xRange[0]) / (this.xRange[1] - this.xRange[0]);
            this._data[i][1] = (this._data[i][1] - this.yRange[0]) / (this.yRange[1] - this.yRange[0]);
        }
    }

    /**
     * Get the range of x.
     */
    private get xRange(): [number, number] {
        if (this._xRange === undefined) {
            this._xRange = this.findMinMax(0); 
        }
        return this._xRange;
    }

    /**
     * Get the range of y.
     */
    private get yRange(): [number, number] {
        if (this._yRange === undefined) {
            this._yRange = this.findMinMax(1);
        }
        return this._yRange;
    }

    /**
     * Find min and max values along the given dimension.
     * @param dimension Dimension index along which to find min and max values.
     */
    private findMinMax(dimension: number): [number, number] {
        let len = this._data.length;
        let min: number | undefined;
        let max: number | undefined;

        for(let i = 0; i < len; i++) {
            let temp = this._data[i][dimension];
            if (min === undefined || min > temp){
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
}