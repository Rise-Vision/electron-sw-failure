const {app} = require("electron");
const logger = require("./logger");
const eventHandlers = require("./event-handlers");
const browserWindow = require("./browser-window");
const config = require("../config");

process.on("uncaughtException", logger.errorSync);
process.on("unhandledRejection", logger.errorSync);

logger.debugSync(process.versions);

eventHandlers.init(app, {
  "ready": readyHandler
});

function readyHandler() {
  logger.debugSync("READY EVENT");

  browserWindow.loadWindow(config.testURL);
}
