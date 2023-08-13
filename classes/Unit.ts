export class Unit {
  life: number;
  population: number;
  static counter: number = 0;
  private static readonly MAX = 200;

  constructor(life: number, population: number) {
    this.life = life;
    this.population = 1;
    Unit.counter += population;
  }

  static checkPopulationLimit() {
    if (Unit.counter > Unit.MAX) return 'red';
    else return 'blue';
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
    this.population += 1;
  }
}
