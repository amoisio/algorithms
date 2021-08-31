import Matrix from './matrix';

describe('matrix', () => {

    test('constructs a properly accessable matrix', () => {
        let data = [1, 2, 3, 4, 5, 6];

        let matrix = new Matrix(3, 2, data);

        expect(matrix.get(0, 0)).toBe(1);
        expect(matrix.get(0, 1)).toBe(2);
        expect(matrix.get(1, 0)).toBe(3);
        expect(matrix.get(1, 1)).toBe(4);
        expect(matrix.get(2, 0)).toBe(5);
        expect(matrix.get(2, 1)).toBe(6);
    });

    test('can be added with another matrix', () => {
        let a = new Matrix(2, 2, [1, 0, 2, 2]);
        let b = new Matrix(2, 2, [4, 1, 3, 1]);

        let result = a.add(b);

        expect(result.get(0, 0)).toBe(5);
        expect(result.get(0, 1)).toBe(1);
        expect(result.get(1, 0)).toBe(5);
        expect(result.get(1, 1)).toBe(3);
    });

    test('can be subtracted with another matrix', () => {
        let a = new Matrix(2, 2, [1, 0, 2, 2]);
        let b = new Matrix(2, 2, [4, 1, 3, 1]);

        let result = a.subtract(b);

        expect(result.get(0, 0)).toBe(-3);
        expect(result.get(0, 1)).toBe(-1);
        expect(result.get(1, 0)).toBe(-1);
        expect(result.get(1, 1)).toBe(1);
    });

    test('can be transposed', () => {
        let a = new Matrix(2, 3, [1, 0, 2, 2, 6 ,7]);

        let result = a.transpose();

        expect(result.get(0, 0)).toBe(1);
        expect(result.get(1, 0)).toBe(0);
        expect(result.get(2, 0)).toBe(2);
        expect(result.get(0, 1)).toBe(2);
        expect(result.get(1, 1)).toBe(6);
        expect(result.get(2, 1)).toBe(7);
    })

    test('can be multiplied with another matrix', () => {
        let a = new Matrix(2, 1, [1, 0]);
        let b = new Matrix(2, 1, [4, 1]);

        let result = a.transpose().multiply(b);

        expect(result.get(0, 0)).toBe(4);
    });

    test('can be multiplied with another matrix2', () => {
        let a = new Matrix(2, 1, [1, 0]);
        let b = new Matrix(2, 1, [4, 1]);

        let result = a.multiply(b.transpose());

        expect(result.get(0, 0)).toBe(4);
        expect(result.get(0, 1)).toBe(1);
        expect(result.get(1, 0)).toBe(0);
        expect(result.get(1, 1)).toBe(0);
    });
});