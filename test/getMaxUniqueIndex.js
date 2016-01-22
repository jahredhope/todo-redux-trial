/*global describe, it*/
"use strict";
let expect = require("chai").expect;

import getMaxUniqueIndex from "../src/getMaxUniqueIndex";

function mockTodo(value) {
  return {uniqueIndex: value};
}

describe("getMaxUniqueIndex", ()=> {
  it("should give an initial value", ()=> {
    expect(getMaxUniqueIndex([])).to.equal(0);
  });
  it("should give the maximum number", ()=> {
    expect(getMaxUniqueIndex([
      mockTodo(1),
      mockTodo(2),
      mockTodo(3),
      mockTodo(4)]
    )).to.equal(4);
  });
  it("should give the maximum number even with a gap", ()=> {
    expect(getMaxUniqueIndex([
      mockTodo(1),
      mockTodo(6),
      mockTodo(5),
      mockTodo(4)]
    )).to.equal(6);
  });
});
