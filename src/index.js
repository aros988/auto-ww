import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import CarList from './components/CarList';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/carlist">Car Details</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/carlist" component={CarList} />
            </Switch>

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('app'));