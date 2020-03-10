export default class QuickUnion {
    public readonly size: number;
    public readonly data: number[];
    constructor(size:number) {
        this.size = size;

        this.data = new Array<number>(size);
        for(let i = 0; i < size; i++) {
            this.data[i] = i;
        }
    }

    public union(p: number, q: number) {
        let pRoot = this.findRoot(p);
        let qRoot = this.findRoot(q);
        this.data[qRoot] = pRoot;
    }

    public connected(p: number, q: number): boolean {
        let pRoot = this.findRoot(p);
        let qRoot = this.findRoot(q);
        return pRoot == qRoot;
    }

    private findRoot(p: number): number {
        let i = p;
        while(this.data[i] != i){
            i = this.data[i];
        }
        return i;
    }
}