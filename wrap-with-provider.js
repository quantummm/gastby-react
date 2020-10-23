import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/store/reducer';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from './src/store/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
