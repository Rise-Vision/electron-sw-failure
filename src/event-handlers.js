const logger = require("./logger");

module.exports = {
  init(app, handlers) {
    if (!app) {throw Error("Missing app")}

    app.on("window-all-closed", ()=>{
      logger.debugSync("ALL CLOSED");
      app.quit();
    });

    [
      "browser-window-created",
      "certificate-error",
      "gpu-process-crashed"
    ].forEach(evt=>app.on(evt, ()=>logger.debugSync(evt)));

    app.on("web-contents-created", (createdEvt, contents)=>{
      [
        "did-finish-load",
        "dom-ready",
        "crashed",
        "plugin-crashed",
        "destroyed",
        "certificate-error"
      ].forEach(evt=>contents.on(evt, ()=>logger.debugSync(evt)));
    });

    Object.keys(handlers).forEach(handlerName=>{
      app.on(handlerName, handlers[handlerName]);
    });
  }
};
