import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import ManagerContainer from './container/manager-container';

ReactDOM.render(
  <Provider store={store}>
    <ManagerContainer todos={[]} />
  </Provider>,
  document.getElementById('react-root')
);
