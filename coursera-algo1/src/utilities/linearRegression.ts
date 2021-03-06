/**
 * Computes a linear model f(x) = ax + b for the given data.
 */
export default class LinearRegression {
    private readonly _data: number[][];

    constructor(data: number[][]) {
        this._data = data;
    }

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

        this. e = this._data[0]
            .map((value, index) => Math.pow(this._data[1][index] - (a*value + b), 2))
            .reduce((previous, current) => previous + current);
    }

    /**
     * Computes the model parameters.
     */
    public computeModel(): void {
        let n = this._data[0].length;

        let sx = this._data[0].reduce((prev, current) => prev + current, 0);
        let sy = this._data[1].reduce((prev, current) => prev + current, 0);

        let sxy = this._data[0]
            .map((value, index) => value * this._data[1][index])
            .reduce((prev, current) => prev + current);

        let sxx = this._data[0]
            .map((value) => value * value)
            .reduce((prev, current) => prev + current);

        this.b = (sxx * sy - sx*sxy) / (n*sxx - sx * sx);
        this.a = (sy - n*this.b) / sx;   
    }
}