import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {Provider} from 'react-redux'
import {createStore} from "redux"
import reducer from "./reducers"
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import {AlertTemplate} from './components/Modals'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    offset: '30px',
    transition: transitions.FADE
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
        <App/>
        </AlertProvider>
    </Provider>,
    document.getElementById('root')
);
