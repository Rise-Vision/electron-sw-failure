const fs = require("fs");
const logs = {
  debug: "debug.log",
  error: "error.log"
};

module.exports = {
  debugSync(msg) {
    appendSync(logs.debug, time(ensureString(msg)));
  },
  errorSync(err) {
    appendSync(logs.error, time(err.stack || err));
  }
};

function ensureString(msg) {
  if (typeof msg === "object") {
    return JSON.stringify(msg, null, 2); // eslint-disable-line no-magic-numbers
  }

  return msg;
}

function time(str) {
  return `${new Date().toISOString()} ${str}\n\n`;
}

function appendSync(fileName, data) {
  fs.writeFileSync(fileName, data, {flag: "a"});
}
