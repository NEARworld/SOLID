import {Marine, Tank, Unit} from "./classes/Unit.js";
import {PopulationManager} from "./classes/PopulationManager.js";

const tanks: Tank[] = [];

const marine = new Marine();
const tank = new Tank();

Array.from({length: 200}, () => {
    tanks.push(new Tank());
})

console.log('PopulationManager.counter:', PopulationManager.counter);
const color = PopulationManager.checkPopulationLimit();

if (color === 'red')
    console.log(`The population has exceeded the maximum population value!`);
else console.log('the population is normal!');
