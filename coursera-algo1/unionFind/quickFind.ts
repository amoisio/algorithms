export default class QuickFind {
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
        let targetGroup = this.data[p];
        let sourceGroup = this.data[q];

        for(let i = 0; i < this.size; i++) {
            if (this.data[i] == targetGroup) {
                this.data[i] = sourceGroup;
            }
        }
    }

    public connected(p: number, q: number): boolean {
        return this.data[p] == this.data[q];
    }
}