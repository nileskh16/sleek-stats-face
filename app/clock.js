import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils.js";

export function drawDate(event) {
  let hourLabel = document.getElementById("hourLabel");
  let minLabel = document.getElementById("minLabel");
  let dateLabel = document.getElementById("dateLabel");
  let today = event !== null ? event.date : new Date();
  let dayOfWeek = util.getDayOfWeek(today.getDay());
  let date = today.getDate();
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
    hours = util.zeroPad(hours);
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  hourLabel.text = `${hours}`;
  minLabel.text = mins;
  dateLabel.text = `${dayOfWeek} ${date}`;
}