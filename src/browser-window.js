const {BrowserWindow} = require("electron");

const options = {
  "center": true,
  "fullscreen": true,
  "frame": false,
  "webPreferences": {
    "plugins": true,
    "nodeIntegration": false,
    "webSecurity": false
  }
};

module.exports = {
  loadWindow(url, devTools = true) {
    const bWindow = new BrowserWindow(options);
    bWindow.loadURL(url);
    if (devTools) {bWindow.webContents.openDevTools()}
  }
}
