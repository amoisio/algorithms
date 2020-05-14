import LinearRegression from './linearRegression';

describe("Linear regression", () => {

    test("Simple linear regression", () => {
        let data: number[][] = [ [0, 1, 2, 3, 4], [1, 2, 3, 4, 5] ];
        
        let regression = new LinearRegression(data);
        regression.normalize = true;
        regression.computeModel();
        
        expect(regression.a).toBe(1);
        expect(regression.b).toBe(0);

        regression.computeError();

        expect(regression.e).toBe(0);
    });

});