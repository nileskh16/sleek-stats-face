import { me as appbit } from "appbit";
import { today } from "user-activity";
import document from "document";

export const goalTypes = [
  "steps",
  "elevationGain",
  "calories",
  "activeMinutes",
  "distance"
];

let activityTypes = [];

function getGoalEntity(prefix) {
  let goalEl = document.getElementById(prefix);
  if (goalEl === null) return goalEl;
  return {
    prefix: prefix,
    container: goalEl,
    count: goalEl.getElementsByClassName("count")[0],
    icon: goalEl.getElementsByClassName("icon")[0]
  }
}

function drawActivity(activityType) {
  if (activityType !== null) {
    const prefix = activityType.prefix;
    let actual = today.adjusted[prefix] !== undefined ? today.adjusted[prefix] : '__' ;
    if (prefix === "distance" && actual !== "__") {
      actual = (actual / 1000).toPrecision(3);
    }
    activityType.count.text = `${actual}`;
  }
}

export function drawAllActivities() {
  for (let goal of goalTypes) {
    drawActivity(getGoalEntity(goal));
  }
}