import { battery } from "power";
import document from "document";

export function drawBattery() {
  const powerBank = document.getElementById("powerBank");
  const powerCharge = document.getElementById("powerCharge");
  const fullWidth = 18;
  const level = Math.floor(battery.chargeLevel);
  const powerLabel = document.getElementById("power");
  
  let newWidth = Math.floor(fullWidth * level / 100);
  let color = "green";
  if (level <= 10) {
    color="crimson";
  } else if (level <= 25) {
    color = "orange";
  } else if (level <= 50) {
    color = "fb-peach";
  } else if (level <= 75) {
    color = "lime";
  }
  
  if (powerBank != null) {
    powerBank.style.fill = color;
    powerBank.width = newWidth;
  }
  
  if (powerCharge != null) {
    powerCharge.style.fill = color;
  }
  
  if (powerLabel !== null) {
    powerLabel.getElementsByClassName("digit")[0].text = `${level}%`;
  }
}