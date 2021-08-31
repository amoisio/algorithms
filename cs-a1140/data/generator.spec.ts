import * as Generators from './generators';

describe('number generator', () => {
    it('should generate a list of consecutive number in random order', () => {
        let values = Generators.numberGenerator(10);

        expect(values).toContain(1);
        expect(values).toContain(2);
        expect(values).toContain(3);
        expect(values).toContain(4);
        expect(values).toContain(5);
        expect(values).toContain(6);
        expect(values).toContain(7);
        expect(values).toContain(8);
        expect(values).toContain(9);
        expect(values).toContain(10);
        expect(values).toHaveLength(10);
    });

});
