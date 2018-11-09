const { expect } = require("chai");

const { view, h, flattenArrayDeep, createElement } = require("../compiled");

describe("Test suite", () => {
  it("works without failing", () => {
    expect(true).to.be.true;
  });
});

describe("View function", () => {
  let result;
  before(() => {
    result = view();
  });

  it("should be a function", () => {
    expect(view).to.be.a("function");
  });

  it("should return an Object", () => {
    expect(result).to.be.an("object");
  });

  it("should contain keys type,props and children", () => {
    expect(result).to.have.ownProperty("type");
    expect(result).to.have.ownProperty("props");
    expect(result).to.have.ownProperty("children");
  });
});

describe("H function", () => {
  let result;

  before(() => {
    const type = "li";
    const props = { className: "test" };
    const children = "test";
    result = h(type, props, children);
  });

  it("returns an object", () => {
    expect(result).to.be.an("object");
  });

  it("has return keys of type,props,children", () => {
    expect(result).to.have.ownProperty("type");
    expect(result).to.have.ownProperty("props");
    expect(result).to.have.ownProperty("children");
  });

  describe("If no props are passed", () => {
    before(() => {
      const type = "li";
      const props = null;
      const children = "test";
      result = h(type, props, children);
    });

    it("props returns an empty object", () => {
      expect(result.props).to.be.an("object");
    });
  });
});

describe("flattenArrayDeep function", () => {
  let result;
  before(() => {
    const arr = [[1, 2, 3], [4, 5, [6, 7]]];
    result = flattenArrayDeep(arr);
  });

  it("returns a flattened array", () => {
    const value = [1, 2, 3, 4, 5, 6, 7];
    expect(result).to.eql(value);
  });
});

describe("createElement function", () => {
  it("should receive a node and return an HTMLELEMENT", async () => {
    const node = {
      type: "li",
      props: { className: "test" },
      children: ["test"]
    };

    expect(createElement(node)).to.be.an("HTMLLIElement");
  });
});
