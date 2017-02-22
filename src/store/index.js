import {createStore, applyMiddleware} from 'redux';

import reducers from '../reducers';

const enhancer = process.env.NODE_ENV === 'production' ? require('./enhancer.js').default : require('./enhancer.dev.js').default;

export default createStore(reducers, enhancer);
