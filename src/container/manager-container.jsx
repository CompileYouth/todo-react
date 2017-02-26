import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// material-ui
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import RadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import TextField from 'material-ui/TextField';
import { grey400, red500 } from 'material-ui/styles/colors';

import { TransitionMotion, Motion, spring, presets } from 'react-motion';
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

  // animation related logic
  getDefaultStyles() {
    return this.props.todos.map(todo => (
      {
        data: { ...todo }, key: todo.id.toString(), style: { height: 0, opacity: 1 }
      })
    );
  }

  getStyles() {
    return this.props.todos.map(todo => ({
      data: { ...todo },
      key: todo.id.toString(),
      style: {
        height: spring(80, presets.gentle),
        opacity: spring(1, presets.gentle)
      }
    }));
  }

  willEnter() {
    return {
      height: 0,
      opacity: 1
    };
  }

  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0)
    };
  }

  // logic from todo, unrelated to animation
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
        touch
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
                hintText="Add a task here" fullWidth
                onChange={e => this.handleInputChange(e)}
                value={this.state.inputValue}
              />
            </form>)
          }
        </Motion>
        <TransitionMotion
          defaultStyles={this.getDefaultStyles()}
          styles={this.getStyles()}
          willLeave={() => this.willLeave()}
          willEnter={() => this.willEnter()}
        >
          {
            styles => (
              <List className="todo-list">
                {styles.map(({ key, style, data: { value, finish, id } }) => (
                  <div key={key} style={style}>
                    <ListItem
                      className={classnames({ isfinish: finish, 'todo-item': true })}
                      leftCheckbox={
                        <Checkbox
                          checked={finish}
                          uncheckedIcon={<RadioButtonUnchecked />}
                          checkedIcon={<RadioButtonChecked />}
                          onCheck={() => this.handleToggleItem(id)}
                        />
                      }
                      primaryText={value}
                      secondaryText="Jan 17, 2014"
                      rightIconButton={
                        <IconMenu iconButtonElement={iconButtonElement}>
                          <MenuItem
                            primaryText="Delete"
                            leftIcon={<NavigationClose color={red500} />}
                            style={{ color: 'red' }}
                            onClick={() => this.handleDeleteItem(id)}
                          />
                        </IconMenu>
                      }
                    />
                  </div>
                  )
                )}
              </List>
            )

          }
        </TransitionMotion>

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
