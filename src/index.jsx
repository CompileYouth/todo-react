import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import ManagerContainer from './container/manager-container';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ManagerContainer todos={[]} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('todo-app')
);
