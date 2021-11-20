import LinearRegression from "./linearRegression";
import { isNullOrUndefined } from "util";
import { linearizeQuadratic, linearizeCubic, linearizeExponential, linearizeLogarithmic, normalize } from './utilities';
export enum GrowthModel {
    Undetermined = 0,
    Constant = 1,
    Linear = 2,
    Quadratic = 3,
    Cubic = 4,
    Logarithmic = 5,
    Exponential = 6
}

export default class    Complexity {
    private _growthModel: GrowthModel = GrowthModel.Undetermined;
    public results: [GrowthModel, number][] = [];

    get growthModel(): GrowthModel {
        return this._growthModel;    }

    /**
     * Compute approximate complexity
     */
    public compute(loads: number[], costs: number[]): void {
        if (isNullOrUndefined(loads) || loads.length == 0 || isNullOrUndefined(costs) || costs.length == 0) {
            throw new Error("Insufficient data");
        }

        if (loads.length != costs.length) {
            throw new Error("Loads and costs must contain the same amount of items.");
        }

        this._growthModel = GrowthModel.Undetermined;
        this.results = [];

        var regression = this.computeModel(loads, costs, undefined);
        regression.computeError();
        if (Math.abs(regression.a!) < 0.005)
            this.results.push([GrowthModel.Constant, regression.e!]);
        else 
            this.results.push([GrowthModel.Linear, regression.e!]);
        
        regression = this.computeModel(loads, costs, linearizeQuadratic);
        regression.computeError();
        this.results.push([GrowthModel.Quadratic, regression.e!]);

        regression = this.computeModel(loads, costs, linearizeCubic);
        regression.computeError();
        this.results.push([GrowthModel.Cubic, regression.e!]);

        regression = this.computeModel(loads, costs, linearizeExponential);
        regression.computeError();
        this.results.push([GrowthModel.Exponential, regression.e!]);

        regression = this.computeModel(loads, costs, linearizeLogarithmic);
        regression.computeError();
        this.results.push([GrowthModel.Logarithmic, regression.e!]);

        let bestFit = this.results[0];
        for(let i = 1; i < this.results.length; i++) {
            if (this.results[i][1] < bestFit[1]) {
                bestFit = this.results[i];
            }
        }

        this._growthModel = bestFit[0];
    }

    private computeModel(loads: number[], costs: number[], transform?: (data: number[]) => number[]): LinearRegression {

        let normalizedLoads = normalize(loads);
        let normalizedCosts = normalize(costs);

        let transformedCosts: number[] = normalizedCosts;
        if (transform) {
            transformedCosts = transform(transformedCosts);
        }
        
        let regression = new LinearRegression([normalizedLoads, transformedCosts]);
        regression.computeModel();
        return regression;
    }
 }