import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import '../css/App.css'
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store = {store}>
        <App className="bodyContent"/>
    </Provider>,
    document.querySelector('#root')
);