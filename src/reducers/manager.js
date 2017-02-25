import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import actionCreators from '../actions/action-creators';

const initialState = {
  todos: [
    { value: 'Initial Item1', finish: false, id: 343 },
    { value: 'Initial Item2', finish: true, id: 239 }
  ]
};

export default handleActions({
  [actionCreators.add](state, action) {
    return {
      ...state,
      todos: [action.payload, ...state.todos]
    };
  },
  [actionCreators.delete](state, action) {
    const ind = Immutable.List(state.todos).findIndex(v => v.id === action.payload);
    return {
      ...state,
      todos: Immutable.List(state.todos).delete(ind)
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
