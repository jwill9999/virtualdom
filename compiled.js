"use strict";

var CREATE = "CREATE";
var REMOVE = "REMOVE";
var REPLACE = "REPLACE";
var UPDATE = "UPDATE";
var SET_PROP = "SET_PROP";
var REMOVE_PROP = "REMOVE_PROP";

/** ****************************************************
 *                    DIFF
 ***************************************************** */

var changed = function changed(node1, node2) {};

var diffProps = function diffProps(newNode, oldNode) {};

var diffChildren = function diffChildren(newNode, oldNode) {};

var diff = function diff(newNode, oldNode) {};

/** ****************************************************
 *                    PATCH
 ***************************************************** */

var setProps = function setProps(target, name, value) {
  return name === "className" ? target.setAttribute("class", value) : target.setAttribute(name, value);
};

var getProps = function getProps(target, props) {
  Object.keys(props).forEach(function (name) {
    setProps(target, name, props[name]);
  });
};

var createElement = function createElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  var el = document.createElement(node.type);
  // append props
  getProps(el, node.props);
  // append children
  node.children.map(createElement).forEach(el.appendChild.bind(el));
  return el;
};

var removeProp = function removeProp(target, name, value) {};

var patchProp = function patchProp(parent, patches) {};

var patch = function patch(parent, patches) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
};

/** ******************************************
 *   HELPER FUNCTION DEEPLY FLATTENS ARRAYS
 ******************************************** */

var flattenArrayDeep = function flattenArrayDeep(arr) {
  return arr.reduce(function (acc, val) {
    return Array.isArray(val) ? acc.concat(flattenArrayDeep(val)) : acc.concat(val);
  }, []);
};

/** ******************************************
 *           TRANSFORM JSX FUNCTION
 ******************************************** */

var h = function h(type, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  props = props || {};
  return {
    type: type,
    props: props,
    children: flattenArrayDeep(children)
  };
};

/** ******************************************
 *              VIEW METHOD
 ******************************************** */

var view = function view(count) {
  return h(
    "ul",
    { id: "cool", className: "foo" },
    h(
      "li",
      { className: "test" },
      "test"
    ),
    h(
      "li",
      null,
      "text2"
    )
  );
};

var tick = function tick(el, count) {};

var render = function render(el) {
  el.appendChild(createElement(view(0)));
};
