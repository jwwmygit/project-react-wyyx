import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import './assets/reset.css'
import App from './containers/App/App'
import {Provider} from 'react-redux'
import store from './redux/store'
import './mock/mockServer'
ReactDOM.render(
    (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/" component={App}/>
                </Switch>
            </HashRouter>
        </Provider>

    )
  , document.getElementById('root'));
