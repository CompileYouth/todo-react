import { createAction } from 'redux-actions';

export default {
  add: createAction('ADD'),
  delete: createAction('DELETE'),
  toggle: createAction('TOGGLE')
};
