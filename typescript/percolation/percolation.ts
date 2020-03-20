import iUnionFind, { UnionFindConstructor } from "unionFind/iUnionFind";

export default class Percolation {

    private readonly _unionFind: iUnionFind;
    private readonly _n: number;

    // creates n-by-n grid, with all sites initially blocked
    constructor(n: number, unionFind: UnionFindConstructor) {
        if (n < 0) 
            throw new Error("Invalid argument");

        this._n = n;
        this._unionFind = new unionFind(n * n + 2);

        // The last two array places are reserved for virtual
        // items used for testing whether system percolates
        // let count = n * n + 2;
        // this._data = new Array<number>(count);
        // for(let i = 0; i < count; i++) {
        //     this._data[i] = i;
        // }
    }
    
    /**
     * Translate row, column index pair to a data array index
     * @param row row index
     * @param col column index
     */
    private toDataIndex(row: number, col: number) : number {
        return row * this._n + col;
    }

    // opens the site (row, col) if it is not open already
    public open(row: number, col: number) {
        if (row < 0 || col < 0 || row > this._n || col > this._n)
            throw new Error("Invalid argument");
    }

    // is the site (row, col) open?
    public isOpen(row: number, col: number) : boolean {
        if (row < 0 || col < 0 || row > this._n || col > this._n)
            throw new Error("Invalid argument");

        return false;
    }

    // is the site (row, col) full?
    public isFull(row: number, col: number): boolean {
        if (row < 0 || col < 0 || row > this._n || col > this._n)
            throw new Error("Invalid argument");

        return false;
    }

    // returns the number of open sites
    public numberOfOpenSites(): number {
        return 0;
    }

    // does the system percolate?
    public percolates() : boolean {
        return false;
    }
}