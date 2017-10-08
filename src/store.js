import {createStore, applyMiddleware} from 'redux';
import {appReducer} from './reducers/';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
