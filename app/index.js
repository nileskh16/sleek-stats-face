import clock from "clock";
import * as util from "../common/utils";
import * as activity from './activity.js';
import * as battery from './battery.js';
import * as hrm from './hrm.js';
import * as watch from './clock.js';

// Update the clock every minute
clock.granularity = "seconds";

initClock();

function updateUI(evt) {
  watch.drawDate(evt);
  activity.drawAllActivities();
  hrm.drawHeartRate();
  battery.drawBattery();
}

// Update the <text> element every tick with the current time
function initClock() {
    clock.ontick = (evt) => {
      updateUI(evt);
    }
}