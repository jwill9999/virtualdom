/*
 * enables jsdom globally.
 */

const KEYS = require("./keys");

const defaultHtml =
  '<!doctype html><html><head><meta charset="utf-8">' +
  "</head><body></body></html>";

module.exports = function globalJsdom(html, options) {
  if (html === undefined) {
    html = defaultHtml;
  }

  if (options === undefined) {
    options = {};
  }

  // Idempotency
  if (
    global.navigator &&
    global.navigator.userAgent &&
    global.navigator.userAgent.indexOf("Node.js") > -1 &&
    global.document &&
    typeof global.document.destroy === "function"
  ) {
    return global.document.destroy;
  }

  const jsdom = require("jsdom");
  const document = new jsdom.JSDOM(html, options);
  const { window } = document;

  KEYS.forEach(key => {
    global[key] = window[key];
  });

  function cleanup() {
    KEYS.forEach(key => {
      delete global[key];
    });
  }

  global.document = window.document;
  global.window = window;
  window.console = global.console;
  document.destroy = cleanup;

  return cleanup;
};
