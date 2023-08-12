export class Unit {
  life: number;
  population: number;
  static counter: number = 0;

  constructor(life: number) {
    this.life = life;
    this.population = 1;
  }

  static countAll(...units: Unit[]) {
    units.forEach(unit => {
      Unit.counter += unit.population;
    })
    return Unit.counter;
  }
}

export class Marine extends Unit {
  constructor() {
    super(40);
  }
}

export class Tank extends Unit {
  constructor() {
    super(50);
    this.population += 1;
  }
}
