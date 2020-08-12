import { me as appbit } from "appbit";
import { HeartRateSensor } from "heart-rate";
import { BodyPresenceSensor } from "body-presence";
import document from "document";

export function drawHeartRate() {
  const heartLabel = document.getElementById("heartRate");
  const heartText = heartLabel.getElementsByClassName("digit")[0];
  if (appbit.permissions.granted("access_heart_rate")) {
      if (HeartRateSensor) {
        const hrm = new HeartRateSensor({ frequency: 1 });
        hrm.addEventListener('reading', () => {
            heartText.text = `${hrm.heartRate}`;
        });
        if (BodyPresenceSensor) {
            const body = new BodyPresenceSensor();
            body.addEventListener("reading", () => {
              if (body.present) {
                hrm.start();
              } else {
                hrm.stop();
                heartText.text = '__';
              }
          });
          body.start();
        } else {
          hrm.start();
        }
    }
  }
}