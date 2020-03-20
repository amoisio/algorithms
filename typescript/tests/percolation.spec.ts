import Percolation from '../percolation/percolation';
import WQUPC from '../unionFind/wqupc';

const unionFind = WQUPC;

describe('Initialization of the percolation model', () => {
    test('Negative initialization throws an error', () => {
        expect(() => new Percolation(-1, unionFind))
            .toThrow("Invalid argument");
    });
});

describe('Percolation', () => {

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