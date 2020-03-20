import iUnionFind, { UnionFindConstructor } from "unionFind/iUnionFind";

export default class Percolation {

    /**
     * Union find algorithm used to solve the percolation problem
     */
    private readonly _unionFind: iUnionFind;
    /**
     * One dimensions of the percolation grid 
     */
    private readonly _n: number;
    /**
     * 
     */
    private readonly _sites: Array<boolean>;
    /**
     * Represents the top-most virtual item
     */
    private readonly _top: number;
    /**
     * Represents the bottom-most virtual item
     */
    private readonly _bottom: number;

    // creates n-by-n grid, with all sites initially blocked
    constructor(n: number, unionFind: UnionFindConstructor) {
        if (n < 0) 
            throw new Error("Invalid argument");

        this._n = n;

        this._unionFind = new unionFind(n * n + 2);
        this._top = n * n + 1;
        this._bottom = n * n + 2;
        this._sites = new Array<boolean>(n * n);
    }

    /**
     * We model a percolation system using an n-by-n grid 
     * of sites. Each site is either open or blocked. 
     * A full site is an open site that can be connected 
     * to an open site in the top row via a chain of 
     * neighboring (left, right, up, down) open sites. 
     * We say the system percolates if there is a full 
     * site in the bottom row. In other words, a system 
     * percolates if we fill all open sites connected to 
     * the top row and that process fills some open site 
     * on the bottom row. (For the insulating/metallic 
     * materials example, the open sites correspond to 
     * metallic materials, so that a system that 
     * percolates has a metallic path from top to bottom, 
     * with full sites conducting. For the porous substance 
     * example, the open sites correspond to empty space 
     * through which water might flow, so that a system 
     * that percolates lets water fill open sites, flowing 
     * from top to bottom.)
     * 
     */
    


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