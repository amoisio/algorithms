import LinearRegression from './linearRegression.js';

describe("Linear regression", () => {

    test("Simple linear regression", () => {
        let data: number[][] = [ [0, 1, 2, 3, 4], [1, 2, 3, 4, 5] ];
        
        let regression = new LinearRegression(data);
        regression.computeModel();
        
        expect(regression.a).toBe(1);
        expect(regression.b).toBe(1);

        regression.computeError();

        expect(regression.e).toBe(0);
    });

});