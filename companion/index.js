import * as messaging from "messaging";
import { settingsStorage } from "settings";

function sendSettingData(data) {
  if (data && messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}

function sendKeyValue(key, value) {
  if (value) {
    return {
      key: key,
      value: JSON.parse(value)
    }
  }
}

settingsStorage.addEventListener("change", (evt) => {
  if (evt.oldValue !== evt.newValue) {
    sendSettingData(sendKeyValue(evt.key, evt.newValue));
  }
});