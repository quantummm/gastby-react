import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './src/store/reducer';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from './src/store/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(mySaga);

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
