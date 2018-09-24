const CREATE = "CREATE";
const REMOVE = "REMOVE";
const REPLACE = "REPLACE";
const UPDATE = "UPDATE";
const SET_PROP = "SET_PROP";
const REMOVE_PROP = "REMOVE_PROP";

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

const setProps = (target, name, value) =>
  name === "className"
    ? target.setAttribute("class", value)
    : target.setAttribute(name, value);

const getProps = (target, props) => {
  Object.keys(props).forEach(name => {
    setProps(target, name, props[name]);
  });
};

const createElement = node => {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const el = document.createElement(node.type);
  // append props
  getProps(el, node.props);
  // append children
  node.children.map(createElement).forEach(el.appendChild.bind(el));
  return el;
};

const removeProp = (target, name, value) => {};

const patchProp = (parent, patches) => {};

const patch = (parent, patches, index = 0) => {};

/** ******************************************
 *   HELPER FUNCTION DEEPLY FLATTENS ARRAYS
 ******************************************** */

const flattenArrayDeep = arr =>
  arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArrayDeep(val)) : acc.concat(val),
    []
  );

/** ******************************************
 *           TRANSFORM JSX FUNCTION
 ******************************************** */

const h = (type, props, ...children) => {
  props = props || {};
  return {
    type,
    props,
    children: flattenArrayDeep(children)
  };
};

/** ******************************************
 *              VIEW METHOD
 ******************************************** */

const view = count => (
  <ul id="cool" className="foo">
    <li className="test">test</li>
    <li>text2</li>
  </ul>
);

const tick = (el, count) => {};

const render = el => {
  el.appendChild(createElement(view(0)));
};
