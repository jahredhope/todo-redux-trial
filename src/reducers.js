var update = require("react-addons-update");
import { combineReducers } from "redux";

import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  COMPLETE_TODO
}
from "./actions";
const { SHOW_ALL } = VisibilityFilters;


var visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

var todos = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return update(state, {$push: [{
      text: action.text,
      completed: false,
      uniqueIndex: 1 + state.map((todo) => todo.uniqueIndex).reduce((index, prevIndex) => index > prevIndex ? index : prevIndex, 0)
    }]});
  case COMPLETE_TODO:
    return state.map((todo) => {
      return (action.uniqueIndex === todo.uniqueIndex)
      ? (update(todo, {completed: {$set: true}}))
      : todo;
    });
  default:
    return state;
  }
};


function logWrapper(func) {
  return function(state, action){
    /*eslint no-console: 0*/
    console.log("action", action);
    console.log("state", state);
    var result = func(state, action);
    console.log("result", result);
    return result;
  };
}
todos = logWrapper(todos);

var todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
