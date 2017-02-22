import {handleActions} from 'redux-actions';

import actionCreators from '../actions/action-creators';

const initialState = {
  todos: []
};
export default handleActions({
  [actionCreators.add](state, action) {
    return {
      ...state,
      todos: state.todos.push(action.payload)
    };
  },
  [actionCreators.toggle](state, action) {
    return {
      ...state,
      todos: state.todos.map(todo => todo.id === action.payload.id ? { value: todo.value, finish: !todo.finish } : todo)
    }
  }
}, initialState);
