/*global describe, it*/
'use strict';
let assert = require('chai').assert;
let expect = require('chai').expect;

import * as actions from '../src/actions';

import reducer from '../src/reducers';

describe('actions', ()=> {
  it('should create an action to add a todo', ()=> {
    const text = 'Item Text';
    expect(actions.addTodo(text)).to.eql({
      type: actions.ADD_TODO,
      text: text
    });
  });
  it('should create an action to complete a todo', ()=> {
    const uniqueIndex = 3;
    expect(actions.completeTodo(uniqueIndex)).to.eql({
      type: actions.COMPLETE_TODO,
      uniqueIndex: uniqueIndex
    });
  });
});

describe('reducers', ()=> {
  it('should be a function', () => {
    assert.typeOf(reducer, 'function');
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      'todos': [],
      'visibilityFilter': 'SHOW_ALL'
    });
  });
});
