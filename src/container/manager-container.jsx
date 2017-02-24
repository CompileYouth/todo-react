import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import actionCreators from '../actions/action-creators';
import RadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import RadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked';

@connect(
  state => ({ todos: state.manager.todos }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)

export default class ManagerContainer extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    todos: React.PropTypes.array.isRequired
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

  handleTodoItemClick(e) {
    console.log(e.target.id);
    this.props.actions.toggle(e.target.id - 0);
  }

  render() {
    return (
      <div className="todo-list-container">
        <input type="text" value={this.state.inputValue} onChange={e => this.handleInputChange(e)} />
        <button onClick={e => this.handleAddClick(e)}>Add</button>
        <List className="todo-list">
          {this.props.todos.map(todo => (
            <ListItem
              key={todo.id}
              leftCheckbox={
                <Checkbox
                  uncheckedIcon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked />}
                />
              }
              primaryText={todo.value}
              secondaryText="Jan 17, 2014"
              //onClick={e => this.handleTodoItemClick(e)}
            />
            )
          )}
        </List>
      </div>
    );
  }
}
