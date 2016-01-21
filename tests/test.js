/*global describe, it*/
"use strict";
let assert = require("chai").assert;
let expect = require("chai").expect;

import * as actions from "../src/actions";

import reducer from "../src/reducers";

describe("hello app", () => {
});

describe("actions", ()=> {
  it("should create an action to add a todo", ()=> {
    const text = "Item Text";
    expect(actions.addTodo(text)).to.eql({
      type: actions.ADD_TODO,
      text: text
    });
  });
});

describe("reducers", ()=> {
  it("should be a function", () => {
    assert.typeOf(reducer, "function");
  });
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.eql({
      "todos": [],
      "visibilityFilter": "SHOW_ALL"
    });
  });
});
