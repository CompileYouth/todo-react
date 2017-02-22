import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import actionCreators from '../actions/action-creators';

@connect(
  state => {
    return ({todos: state.manager.todos});
  },
  dispatch => ({actions: bindActionCreators(actionCreators, dispatch)})
)

export default class ManagerContainer extends React.Component {
  constructor() {
    super();
    this.state = { inputValue: '' };
  }

  handleInputChange(e) {
    this.setState({inputValue: e.target.value});
  }

  handleAddClick(e) {
    this.props.actions.add({value: this.state.inputValue, finish: false, id: parseInt(Math.random()*1000)});
    this.setState({inputValue: ''});
  }

  handleToggleClick(e) {
    this.props.actions.toggle(e.target.id - 0);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={(e) => this.handleInputChange(e)} />
        <button onClick={(e) => this.handleAddClick(e)}>Add</button>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li
                key={todo.id}
                id={todo.id}
                style={todo.finish ? {color: 'red'} : null}
                onClick={(e) => this.handleToggleClick(e)}
              >
                {todo.value}
              </li>)
          })}
        </ul>
      </div>
    );
  }
}
