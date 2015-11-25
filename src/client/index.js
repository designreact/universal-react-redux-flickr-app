import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import { fetchConfig, fetchStrings } from '../common/actions/config'

import rootReducer from '../common/reducers/root'
import App from '../common/containers/App'

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
)(createStore)
const store = createStoreWithMiddleware(rootReducer)

function start() {
    let rootElement = document.getElementById('root')
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootElement
    )
}

store.dispatch(fetchConfig()).then((action) =>
    store.dispatch(fetchStrings(action.config)).then(() =>
        start()
    )
)