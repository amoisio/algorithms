import Complexity, { GrowthModel } from './complexity.js';
import generateData from './dataGenerator.js';

describe('Complexity computes the best fit for an algorithm', () => {

    let complexity: Complexity;
    let loads: number[] = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200];

    beforeAll(() => {
        complexity = new Complexity();
    })

    test('Should fit constant model to constant data', () => {
        let [_, costs] = generateData(loads, (x: number) => 70, error);
        
        complexity.compute(loads, costs);

        expect(complexity.growthModel).toBe(GrowthModel.Constant);
    });

    test('Should fit linear model to linear data', () => {
        let [_, costs] = generateData(loads, (x: number) => x + 70, error);
        
        complexity.compute(loads, costs);

        expect(complexity.growthModel).toBe(GrowthModel.Linear);
    });

    test('Should fit quadratic model to quadratic data', () => {
        let [_, costs] = generateData(loads, (x: number) => Math.pow(x, 2) + 70, error);
 
        complexity.compute(loads, costs);

        expect(complexity.growthModel).toBe(GrowthModel.Quadratic);
    });

    test('Should fit cubic model to cubic data', () => {
        let [_, costs] = generateData(loads, (x: number) => Math.pow(x, 3) + 70, error);
        
        complexity.compute(loads, costs);

        expect(complexity.growthModel).toBe(GrowthModel.Cubic);
    });

    // test('Should fit exponential model to exponential data', () => {
    //     let [_, costs] = generateData(loads, (x: number) => Math.exp(x) + 70, error);

    //     complexity.compute(loads, costs);

    //     expect(complexity.growthModel).toBe(GrowthModel.Exponential);
    // });

    // test('Should fit logarithmic model to logarithmic data', () => {
    //     let [_, costs] = generateData(loads, (x: number) => Math.log(x) + 70, error);

    //     complexity.compute(loads, costs);

    //     expect(complexity.growthModel).toBe(GrowthModel.Logarithmic);
    // });
});

function error(): number {
    return (Math.random() * 2 - 1) * 0.0 * 70;
}