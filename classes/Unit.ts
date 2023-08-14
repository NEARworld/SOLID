import { IPopulationManager } from "./PopulationManager.js";

export class Unit implements IPopulationManager {
  life: number;
  supply: number;

  constructor(life: number, supply: number) {
    this.life = life;
    this.population = population;
  }
}

export class Marine extends Unit {
  constructor() {
    super(40, 1);
  }
}

export class Tank extends Unit {
  constructor() {
    super(150, 2);
  }
}
