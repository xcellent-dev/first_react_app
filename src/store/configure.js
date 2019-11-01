// Create a store function and export it
// This function will be called from store / index.js
import { createStore, applyMiddleware, compose } from 'redux';
import modules from './modules';
import penderMiddleware from 'redux-pender';

const configure = (initialState) => {
  const enhancers = [
    applyMiddleware(
      penderMiddleware()
    )
  ];

  const store = createStore(modules, initialState, compose(...enhancers));

  return store;
}

export default configure;
