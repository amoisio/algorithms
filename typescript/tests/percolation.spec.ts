import Percolation from '../percolation/percolation';
import WQUPC from '../unionFind/wqupc';

const unionFind = WQUPC;

describe('Initialization of the percolation model', () => {
    test('Negative initialization throws an error', () => {
        expect(() => new Percolation(-1, unionFind))
            .toThrow("Invalid argument");
    });
});

describe('Percolation exceptions', () => {

    const size = 20;
    const percolation = new Percolation(size, unionFind);

    test('.open throws an error when (p,q) out of range', () => {
        expect(() => percolation.open(-1, 1))
            .toThrow("Invalid argument");
        
        expect(() => percolation.open(1, -1))
            .toThrow("Invalid argument");

        expect(() => percolation.open(size + 1, 1))
            .toThrow("Invalid argument");

        expect(() => percolation.open(1, size + 1))
            .toThrow("Invalid argument");
    });

    test('.isOpen throws an error when (p,q) out of range', () => {
        expect(() => percolation.isOpen(-1, 1))
            .toThrow("Invalid argument");
        
        expect(() => percolation.isOpen(1, -1))
            .toThrow("Invalid argument");

        expect(() => percolation.isOpen(size + 1, 1))
            .toThrow("Invalid argument");

        expect(() => percolation.isOpen(1, size + 1))
            .toThrow("Invalid argument");
    });

    test('.isFull throws an error when (p,q) out of range', () => {
        expect(() => percolation.isFull(-1, 1))
            .toThrow("Invalid argument");
        
        expect(() => percolation.isFull(1, -1))
            .toThrow("Invalid argument");

        expect(() => percolation.isFull(size + 1, 1))
            .toThrow("Invalid argument");

        expect(() => percolation.isFull(1, size + 1))
            .toThrow("Invalid argument");
    });
});

describe('Percolation', () => {
    const size = 5;
    let percolation: Percolation = null;

    beforeEach(() => {
        percolation = new Percolation(size, unionFind);
    });

    test('after opening a site, it is marked as open', () => {
        let row = 2;
        let col = 3;
        percolation.open(row, col);

        expect(percolation.isOpen(row, col)).toBeTruthy();
        expect(percolation.isOpen(row - 1, col)).toBeFalsy();
        expect(percolation.isOpen(row + 2, col)).toBeFalsy();
        expect(percolation.isOpen(row, col - 1)).toBeFalsy();
        expect(percolation.isOpen(row, col + 2)).toBeFalsy();
    });

    test('percolation records and updates the number of open sites as sites are opened', () => {
        expect(percolation.numberOfOpenSites()).toBe(0);

        percolation.open(0,0);
        percolation.open(0,1);
        percolation.open(1,1);

        expect(percolation.numberOfOpenSites()).toBe(3);

        percolation.open(0,1);

        expect(percolation.numberOfOpenSites()).toBe(3);
    });

    test('site is full if it can be connected to an open site in the top row', () => {
        percolation.open(1,1);
        percolation.open(2,1);
        percolation.open(3,1);

        expect(percolation.isFull(3, 1)).toBeFalsy();

        percolation.open(0,0);
        percolation.open(0,2);

        expect(percolation.isFull(3, 1)).toBeFalsy();

        percolation.open(0,1);

        expect(percolation.isFull(3, 1)).toBeTruthy();
    });

    test('system percolates when there is a full site in the bottom row', () => {
        percolation.open(0,1);
        percolation.open(1,1);
        percolation.open(2,1);
        percolation.open(3,1);
        percolation.open(4,2);

        expect(percolation.isFull(4, 2)).toBeFalsy();
        expect(percolation.isFull(4, 1)).toBeFalsy();
        expect(percolation.percolates()).toBeFalsy();

        percolation.open(4, 1);

        expect(percolation.isOpen(4, 1)).toBeTruthy();
        expect(percolation.isFull(4, 1)).toBeTruthy();
        expect(percolation.percolates()).toBeTruthy();
    });
});
