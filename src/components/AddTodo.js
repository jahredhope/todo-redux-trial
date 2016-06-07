import React, { Component, PropTypes } from 'react';
import todoImage from '../todo.png';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
  }
  handleChange(e) {
    this.setState({message: e.target.value})
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }
  render() {
    return (
      <div>
        <img style={{height: '40px', display: 'inline'}} src={todoImage} />
        <input type='text' ref='input'
          onChange={this.handleChange.bind(this)}
          onKeyPress = {this.handleKeyPress.bind(this)} />
        <button
          disabled={!this.state.message}
          onClick={this.handleClick.bind(this)}>
          Add
        </button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    text && this.props.onAddClick(text);
    node.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
