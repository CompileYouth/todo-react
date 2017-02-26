/* eslint no-undef: "off" */

import should from 'should';
import reducers from '../src/reducers';

describe('manager', () => {
  describe('add', () => {
    it('Now we have another task', () => {
      const state = reducers({
        manager: {
          todos: [
            { value: 'Initial Item1', finish: false, id: 343 },
            { value: 'Initial Item2', finish: true, id: 239 }
          ]
        }
      }, {
        type: 'ADD',
        payload: { value: 'Third Item', finish: false, id: 136 }
      });

      should.deepEqual(state, {
        manager: {
          todos: [
            { value: 'Third Item', finish: false, id: 136 },
            { value: 'Initial Item1', finish: false, id: 343 },
            { value: 'Initial Item2', finish: true, id: 239 }
          ]
        }
      });
    });
  });

  describe('delete', () => {
    it('Now we delete a task', () => {
      const state = reducers({
        manager: {
          todos: [
            { value: 'Third Item', finish: false, id: 136 },
            { value: 'Initial Item1', finish: false, id: 343 },
            { value: 'Initial Item2', finish: true, id: 239 }
          ]
        }
      }, {
        type: 'DELETE',
        payload: 239
      });

      should.deepEqual(state, {
        manager: {
          todos: [
            { value: 'Third Item', finish: false, id: 136 },
            { value: 'Initial Item1', finish: false, id: 343 }
          ]
        }
      });
    });
  });

  describe('toggle', () => {
    it('Now we change the state of a task', () => {
      const state = reducers({
        manager: {
          todos: [
            { value: 'Third Item', finish: false, id: 136 },
            { value: 'Initial Item1', finish: false, id: 343 }
          ]
        }
      }, {
        type: 'TOGGLE',
        payload: 343
      });

      should.deepEqual(state, {
        manager: {
          todos: [
            { value: 'Third Item', finish: false, id: 136 },
            { value: 'Initial Item1', finish: true, id: 343 }
          ]
        }
      });
    });
  });
});
