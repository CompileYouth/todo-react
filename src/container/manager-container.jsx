import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions/action-creators';

@connect(
  state => ({ todos: state.manager.todos }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)

export default class ManagerContainer extends React.Component {
  static propTypes = {
    actions: React.PropTypes.func.isRequired,
    todos: React.PropTypes.arrayOf({
      value: React.PropTypes.string,
      id: React.PropTypes.number,
      finish: React.PropTypes.bool
    }).isRequired
  };

  constructor() {
    super();
    this.state = { inputValue: '' };
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleAddClick() {
    this.props.actions.add({
      value: this.state.inputValue,
      finish: false,
      id: parseInt(Math.random() * 1000, 10)
    });
    this.setState({ inputValue: '' });
  }

  handleToggleClick(e) {
    this.props.actions.toggle(e.target.id - 0);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={e => this.handleInputChange(e)} />
        <button onClick={e => this.handleAddClick(e)}>Add</button>
        <ul>
          {this.props.todos.map(todo => (
            <li
              key={todo.id}
              id={todo.id}
              style={todo.finish ? { textDecoration: 'line-through' } : null}
              onClick={e => this.handleToggleClick(e)}
            >
              {todo.value}
            </li>)
          )}
        </ul>
      </div>
    );
  }
}
