import {Marine, Tank, Unit} from "./classes/Unit.js";

const tanks: Tank[] = [];

const marine = new Marine();
const tank = new Tank();

Array.from({length: 200}, () => {
    tanks.push(new Tank());
})

console.log('Unit.counter:', Unit.counter);
const color = Unit.checkPopulationLimit();

if (color === 'red')
    console.log(`The population has exceeded the maximum population value`);
else console.log('the population is normal');
