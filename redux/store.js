import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import createSagaMiddleware from '@redux-saga/core';

import { cartItemReducer } from './reducers';
import GetApiData from './sagas';

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(cartItemReducer, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(GetApiData)


export default store