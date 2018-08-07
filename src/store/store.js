import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxLogger from 'redux-logger';
import { all } from "redux-saga/effects";
import * as sagas from "./sagas";
import * as reducers from "./reducers";

const saga = createSagaMiddleware();
const middlewares = [saga];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(reduxLogger);
}

const store = createStore(
  combineReducers({
    connection: reducers.connection,
    main: reducers.mainPage,
    channelSearch: reducers.channelSearch,
    botSearch: reducers.botSearch
  }),
  applyMiddleware(...middlewares),
);

saga.run(function*() {
  yield all([
    sagas.auth(),
    sagas.data(),
    sagas.searchChannels(),
    sagas.searchBots()
  ]);
});
export default store;
