import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import mediumReducer from './mediumReducer'
import hackerNewsReducer from './hackerNewsReducer'

const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))