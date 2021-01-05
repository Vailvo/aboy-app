import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware, logger];


export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

//persistor was removed from export and the website is debugged for now

export default store;