import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/bootstrap-green.css';
import './css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './componentes/Login';
import Dashboard from './componentes/Dashboard';
import {Route, browserHistory, Router} from 'react-router';
//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
        <Router history={browserHistory} >
            <Route component={App}>
                <Route path="/login" component={Login}/>
                <Route exact path="/" component={Dashboard}/>
            </Route>
        </Router>
        , document.getElementById('root'));
//registerServiceWorker();
