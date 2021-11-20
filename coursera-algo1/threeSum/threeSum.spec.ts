import ThreeSum from './threeSum';

describe('ThreeSum', () => {
    test('All non-negative numbers should yield 0', () => {
        let numbers: number[] = [];
        let count: 20;
        
        while (numbers.length < count) {
            let candidate = Math.round(Math.random() * 1000);
            if (!numbers.includes(candidate)) {
                numbers.push(candidate);
            }
        }

        let result = ThreeSum(numbers);
        
        expect(result).toBe(0);
    });

    test('Example case should find 4', () => {
        let numbers: number[] = [30, -40, -20, -10, 40, 0, 10, 5];
        
        let result = ThreeSum(numbers);
        
        expect(result).toBe(4);
    });
});
