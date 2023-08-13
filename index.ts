import { Marine, Tank, Unit } from "./classes/Unit.js";
import { PopulationManager } from "./classes/PopulationManager.js";

let units: Unit[] = [];
const deployBtnMarine = document.getElementById("deploy-btn-marine")!;
const deployBtnTank = document.getElementById("deploy-btn-tank")!;

deployBtnMarine.addEventListener("click", () => {
  units.push(new Marine());
});
deployBtnTank.addEventListener("click", () => {
  units.push(new Tank());
});

const btnContainer = document.getElementById("btn-container")!;
btnContainer.addEventListener("click", () => {
  printUnitsAmount();
  logPopulationStatus();
});

function printUnitsAmount() {
  const counter = document.getElementById("counter")!;
  counter.innerText = `deployed units: ${PopulationManager.countTotalPopulation(
    units,
  )}`;
}
function logPopulationStatus() {
  const color = PopulationManager.checkPopulationLimit();

  if (color === "red")
    console.log(`The population has exceeded the maximum population value!`);
  else console.log("the population is normal!");
}
