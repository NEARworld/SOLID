import {Marine, Tank, Unit} from "./classes/Unit.js";

const marine = new Marine();
const tank = new Tank();

const all = Unit.countAll(marine, tank);
console.log('all:', all);
