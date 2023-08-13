import { Unit } from "./Unit.js";

export class PopulationManager {
  population: number;
  private static counter: number = 0;
  private static readonly MAX = 200;

  constructor() {
    this.population = 0;
  }

  static countTotalPopulation(units: Unit[]) {
    this.counter = 0;
    units.forEach((unit) => {
      this.counter += unit.population;
    });
    return this.counter;
  }

  static checkPopulationLimit() {
    if (this.counter > this.MAX) return "red";
    else return "blue";
  }
}
