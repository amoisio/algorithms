export default class Matrix {
    private readonly _data: number[];
    public readonly rows: number;
    public readonly cols: number;
    constructor(rows: number, cols: number, data ?: number[]) {
        this.rows = rows;
        this.cols = cols;
        this._data = new Array(rows * cols);

        if (data) {
            let len = data.length;
            for(let i = 0; i < len; i++) {
                this._data[i] = data[i];
            }
        }
    }

    public get(rowIndex: number, colIndex: number): number {
        if (rowIndex >= this.rows || colIndex >= this.cols) 
            throw new Error("Index out of bounds");
        return this._data[(rowIndex * this.cols) + colIndex];
    }

    public set(rowIndex: number, colIndex: number, value: number): void {
        if (rowIndex >= this.rows || colIndex >= this.cols)
            throw new Error("Index out of bounds");
        this._data[(rowIndex * this.cols) + colIndex] = value;
    }

    public add(matrix: Matrix): Matrix {
        if (this.rows != matrix.rows || this.cols != matrix.cols)
            throw new Error("Matrix dimensions are not compatible.");

        let result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let value = this.get(i, j) + matrix.get(i, j);
                result.set(i, j, value);
            }
        }
        return result;
    }

    public subtract(matrix: Matrix): Matrix {
        if (this.rows != matrix.rows || this.cols != matrix.cols)
            throw new Error("Matrix dimensions are not compatible.");

        let result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let value = this.get(i, j) - matrix.get(i, j);
                result.set(i, j, value);
            }
        }
        return result;
    }

    public transpose(): Matrix {
        let result = new Matrix(this.cols, this.rows);
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                result.set(i, j, this.get(j, i));
            }
        }
        return result;
    }

    public multiply(matrix: Matrix): Matrix {
        if (this.cols != matrix.rows || this.rows != matrix.cols)
            throw new Error("Matrix dimensions are not compatible.");

        let result = new Matrix(this.rows, matrix.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < matrix.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.get(i, k) * matrix.get(k, j);
                }
                result.set(i, j, sum);
            }
        }
        return result;
    }

    // public print() {
    //     for (let i = 0; i < this.rows; i++) {
    //         console.log(this._data.slice()))
    //     }
    // }
}