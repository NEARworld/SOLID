export class PopulationManager {
  population: number;
  static counter: number = 0;
  private static readonly MAX = 200;

  constructor() {
    this.population = 0;
  }

  static checkPopulationLimit() {
    if (this.counter > this.MAX) return 'red';
    else return 'blue';
  }
}
