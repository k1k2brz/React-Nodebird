// configureStore.js
import { createWrapper } from "next-redux-wrapper";
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const configureStore = () => {
  const middlewares = []
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    // 데브툴 연결
    : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducer as any, enhancer);
  store.dispatch({
    type: 'CHANGE_NICKNAME',
    data: 'lee',
  })
  return store
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
