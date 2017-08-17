import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Admin from './components/Admin'
import adminReducers from './redux/adminReducers'

const store =createStore(
    adminReducers
);
const root = document.getElementById('adminRoot');

ReactDOM.render(
    <Provider store={store}>
        <Admin/>
    </Provider>,
    root
);
