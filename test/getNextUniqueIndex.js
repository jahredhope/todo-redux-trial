/*global describe, it*/
'use strict';
let expect = require('chai').expect;

import getNextUniqueIndex from '../src/getNextUniqueIndex';

function mockTodo(value) {
  return {uniqueIndex: value};
}

describe('getMaxUniqueIndex', ()=> {
  it('should give an initial value', ()=> {
    expect(getNextUniqueIndex([])).to.equal(1);
  });

  it('should give the highest number plus', ()=> {
    expect(getNextUniqueIndex([
      mockTodo(1),
      mockTodo(2),
      mockTodo(3),
      mockTodo(4)]
    )).to.equal(5);
  });

  it('should give the next highest number even with a gap', ()=> {
    expect(getNextUniqueIndex([
      mockTodo(1),
      mockTodo(6),
      mockTodo(undefined),
      mockTodo(4)]
    )).to.equal(7);
  });
});
