import React, { Component, PropTypes } from 'react';
import todoImage from '../todo.png';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <img style={{height: '40px', display: 'inline'}} src={todoImage} />
        <input type='text' ref='input' />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
