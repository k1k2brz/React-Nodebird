// configureStore.js
import { createWrapper } from "next-redux-wrapper";
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas'

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.log(action);
  return next(action)
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    // 데브툴 연결
    : composeWithDevTools(applyMiddleware(...middlewares))
  const store: any = createStore(reducer as any, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  // store.dispatch({
  //   type: 'CHANGE_NICKNAME',
  //   data: 'lee',
  // })
  return store
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
