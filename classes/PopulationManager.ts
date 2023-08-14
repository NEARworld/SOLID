import { Unit } from "./Unit.js";

// Interface Segregation Principle (ISP)
// make interface smaller
export interface IPopulationManager {
  supply: number;
}

export class PopulationManager implements IPopulationManager {
  private static counter: number = 0;
  private static readonly MAX = 200;
  supply: number;

  constructor() {
    this.supply = 0;
  }

  static countTotalPopulation(units: Unit[]) {
    this.counter = 0;
    units.forEach((unit) => {
      this.counter += unit.supply;
    });
    return this.counter;
  }

  static checkPopulationLimit() {
    if (this.counter > this.MAX) return "red";
    else return "blue";
  }
}
