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

        let count = n * n + 2;
        this._unionFind = new unionFind(count);
        this._sites = new Array<boolean>(count);
        
        // Open virtual nodes
        this._top = count - 2;
        this._bottom = count - 1;
        this._sites[this._top] = true;
        this._sites[this._bottom] = true;
    }

    /**
     * Translate row, column index pair to a data array index
     * @param row row index
     * @param col column index
     */
    private toItemIndex(row: number, col: number) : number {
        if (row < 0) {
            // Return the top virtual node index
            return this._top;
        } 

        if (row > this._n) {
            // Return the bottom virtual node index
            return this._bottom;
        }

        return row * this._n + col;
    }

    /**
     * Opens the site if it is not open already
     * @param row grid row index
     * @param col grid column index
     */
    public open(row: number, col: number) {
        if (row < 0 || col < 0 || row > this._n || col > this._n) {
            throw new Error("Invalid argument");
        }

        let index = this.toItemIndex(row, col);
        this.   _sites[index] = true;

        // Connect neighbouring sites (if they are open)
        this.connectNeighbour(index, row - 1, col); // top
        this.connectNeighbour(index, row + 1, col); // bottom
        this.connectNeighbour(index, row, col - 1); // left
        this.connectNeighbour(index, row, col + 1); // right
    }

    /**
     * Connects to neighbouring site if it is open
     * @param index item index of the current site
     * @param row grid row index of the neighbouring site
     * @param col grid column index of the neighbouring site
     */
    private connectNeighbour(index: number, row: number, col: number) {
        let neighbourIndex = this.toItemIndex(row, col);
        if (this._sites[neighbourIndex])
            this._unionFind.union(index, neighbourIndex);
    }

    /**
     * Is the site open (or blocked)
     * @param row grid row index
     * @param col grid column index
     */
    public isOpen(row: number, col: number) : boolean {
        if (row < 0 || col < 0 || row > this._n || col > this._n) {
            throw new Error("Invalid argument");
        }

        let index = this.toItemIndex(row, col);
        return this._sites[index];
    }

    /**
     * Is the site full - a full site is an open site 
     * that can be connected to an open site in the top 
     * row via a chain of  neighboring (left, right, 
     * up, down) open sites. 
     * @param row grid row index
     * @param col grid column index
     */
    public isFull(row: number, col: number): boolean {
        if (row < 0 || col < 0 || row > this._n || col > this._n) {
            throw new Error("Invalid argument");
        }
        
        let index = this.toItemIndex(row, col);
        let isOpen = this._sites[index];

        return isOpen
            ? this._unionFind.connected(this._top, index)
            : false;
    }

    /**
     * Gets the number of open sites in the system
     */
    public numberOfOpenSites(): number {
        // We offset by -2 due to the top and bottom virtual nodes
        return this._sites.filter(site => site).length - 2;
    }

    /**
     * Determines if the system percolates.
     */
    public percolates() : boolean {
        return this._unionFind.connected(this._top, this._bottom);
    }
}