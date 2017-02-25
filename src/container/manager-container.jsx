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
import { grey400 } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import { Motion, spring, presets } from 'react-motion';

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

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleAddClick() {

    this.setState({
      inputIsAvailable: true
    });

    // this.props.actions.add({
    //   value: this.state.inputValue,
    //   finish: false,
    //   id: parseInt(Math.random() * 1000, 10)
    // });
    // this.setState({ inputValue: '' });
  }

  handleToggleClick(e) {
    this.props.actions.toggle(e.target.id - 0);
  }

  handleTodoItemClick(e) {
    this.props.actions.toggle(e.target.id - 0);
  }

  render() {
    const leftCheckbox = (
      <Checkbox
        uncheckedIcon={<RadioButtonUnchecked />}
        checkedIcon={<RadioButtonChecked />}
      />
    );

    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconButton = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );

    return (
      <div className="todo-list-container">
        <Motion
          style={{
            inputY: spring(this.state.inputIsAvailable ? 30 : 0),
            opa: spring(this.state.inputIsAvailable ? 1 : 0) }}
        >
          {
            ({ inputY, opa }) => (<TextField
              className="input-field"
              style={{
                WebkitTransform: `translate3d(0, ${inputY}px, 0)`,
                transform: `translate3d(0, ${inputY}px, 0)`,
                opacity: opa
              }}
              hintText="Add a task here" fullWidth={true}
            />)
          }

        </Motion>
        <List className="todo-list">
          {this.props.todos.map(todo => (
            <div key={todo.id}>
              <ListItem
                className="todo-item"
                leftCheckbox={leftCheckbox}
                primaryText={todo.value}
                secondaryText="Jan 17, 2014"
                rightIconButton={rightIconButton}
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
