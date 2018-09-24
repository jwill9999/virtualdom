import {
  CREATE,
  REMOVE,
  REPLACE,
  UPDATE,
  SET_PROP,
  REMOVE_PROP
} from "./constants";

/** ****************************************************
 *                    DIFF
 ***************************************************** */

const changed = (node1, node2) => {};

const diffProps = (newNode, oldNode) => {};

const diffChildren = (newNode, oldNode) => {};

const diff = (newNode, oldNode) => {};

/** ****************************************************
 *                    PATCH
 ***************************************************** */

const createElement = node => {};

const setProp = (target, name, value) => {};

const setProps = (target, props) => {};

const removeProp = (target, name, value) => {};

const patchProp = (parent, patches) => {};

const patch = (parent, patches, index = 0) => {};

/** ****************************************************
 *                    MY APPLICATION
 ***************************************************** */

const flatten = arr => {};

const h = (type, props, ...children) => {};

const view = count => {};

const tick = (el, count) => {};

const render = el => {};
