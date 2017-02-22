import {handleActions} from 'redux-actions';

import actionCreators from '../actions/action-creators';

const initialState = {
  todos: [{value: 'hello', finish: false, id: 343},{value:'dddd', finish:false, id:239}]
};
export default handleActions({
  [actionCreators.add](state, action) {
    console.log(action.payload);
    return {
      ...state,
      todos: [...state.todos, action.payload]//state.todos.push(action.payload)
    };
  },
  [actionCreators.toggle](state, action) {
    return {
      ...state,
      todos: state.todos.map(todo => todo.id === action.payload ? { value: todo.value, finish: !todo.finish, id: todo.id } : todo)
    }
  }
}, initialState);
