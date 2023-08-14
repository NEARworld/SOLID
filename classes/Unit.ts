export class Unit {
  life: number;
  population: number;

  constructor(life: number, population: number) {
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
