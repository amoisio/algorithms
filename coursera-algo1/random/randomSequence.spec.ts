import { RandomSequence } from './randomSequence';

describe('Random sequence', () => {

    test('Throws if called with a from argument that is greater than to argument', () => {
        expect(() => RandomSequence.generate(5, 4)).toThrow();
    });

    test('Generates a sequece of distinct numbers between the given range, inclusive', () => {

        let from = 0;
        let to = 9;
        let seq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let result = RandomSequence.generate(from, to);
        result = result.sort((a, b) => a - b);

        expect(result).toStrictEqual(seq);
    });

    test('Subsequent calls generate different sequences', () => {
        let from = 0;
        let to = 9;
        let seq1 = RandomSequence.generate(from, to);
        let seq2 = RandomSequence.generate(from, to);

        expect(seq1).not.toStrictEqual(seq2);
    });

});