import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import actionCreators from '../actions/action-creators';

const initialState = {
  todos: [{ value: 'hello', finish: true, id: 343 }, { value: 'dddd', finish: false, id: 239 }]
};
export default handleActions({
  [actionCreators.add](state, action) {
    return {
      ...state,
      todos: [action.payload, ...state.todos]
    };
  },
  [actionCreators.toggle](state, action) {
    return {
      ...state,
      todos: Immutable.List(state.todos).map(
        todo => (todo.id === action.payload ?
          { value: todo.value, finish: !todo.finish, id: todo.id } : todo)
      ).toJS()
    };
  }
}, initialState);
