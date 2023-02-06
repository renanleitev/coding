import "@babel/polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas/saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({ reducer: reducer, middleware: [sagaMiddleware]})

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} 
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
