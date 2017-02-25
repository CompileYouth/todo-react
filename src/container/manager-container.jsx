import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// material-ui
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import RadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import RadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { grey400, red500 } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { Motion, spring } from 'react-motion';
import classnames from 'classnames';

import actionCreators from '../actions/action-creators';

@connect(
  state => ({ todos: state.manager.todos }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)

export default class ManagerContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      inputIsAvailable: false
    };
  }

  handleAddClick() {
    this.setState({ inputIsAvailable: true });
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleAddSubmit(e) {
    e.preventDefault();

    this.props.actions.add({
      value: this.state.inputValue,
      finish: false,
      id: parseInt(Math.random() * 1000, 10)
    });
    this.setState({ inputValue: '' });

    this.setState({ inputIsAvailable: false });
  }

  handleToggleItem(id) {
    this.props.actions.toggle(id - 0);
  }

  handleDeleteItem(id) {
    this.props.actions.delete(id);
  }

  render() {
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    return (
      <div className="todo-list-container">
        <Motion
          style={{
            inputY: spring(this.state.inputIsAvailable ? 20 : 0),
            opa: spring(this.state.inputIsAvailable ? 1 : 0) }}
        >
          {
            ({ inputY, opa }) => (<form onSubmit={e => this.handleAddSubmit(e)}>
              <TextField
                className="input-field"
                style={{
                  WebkitTransform: `translate3d(0, ${inputY}px, 0)`,
                  transform: `translate3d(0, ${inputY}px, 0)`,
                  opacity: opa
                }}
                hintText="Add a task here" fullWidth={true}
                onChange={e => this.handleInputChange(e)}
                value={this.state.inputValue}
              />
            </form>)
          }
        </Motion>
        <List className="todo-list">
          {this.props.todos.map(todo => (
            <div key={todo.id}>
              <ListItem
                className={classnames({ isfinish: todo.finish, 'todo-item': true })}
                leftCheckbox={
                  <Checkbox
                    checked={todo.finish}
                    uncheckedIcon={<RadioButtonUnchecked />}
                    checkedIcon={<RadioButtonChecked />}
                    onCheck={() => this.handleToggleItem(todo.id)}
                  />}
                primaryText={todo.value}
                secondaryText="Jan 17, 2014"
                rightIconButton={
                  <IconMenu iconButtonElement={iconButtonElement}>
                    <MenuItem
                      primaryText="Delete"
                      leftIcon={<NavigationClose color={red500} />}
                      style={{ color: 'red' }}
                      onClick={() => this.handleDeleteItem(todo.id)}
                    />
                  </IconMenu>
                }
              />
            </div>
            )
          )}
        </List>
        <FloatingActionButton
          className="add-btn"
          onClick={() => this.handleAddClick()}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
