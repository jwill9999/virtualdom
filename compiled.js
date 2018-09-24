"use strict";

var _constants = require("./constants");

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

var createElement = function createElement(node) {};

var setProp = function setProp(target, name, value) {};

var setProps = function setProps(target, props) {};

var removeProp = function removeProp(target, name, value) {};

var patchProp = function patchProp(parent, patches) {};

var patch = function patch(parent, patches) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
};

/** ****************************************************
 *                    MY APPLICATION
 ***************************************************** */

var flatten = function flatten(arr) {};

var h = function h(type, props) {};

var view = function view(count) {};

var tick = function tick(el, count) {};

var render = function render(el) {};
