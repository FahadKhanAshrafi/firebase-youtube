import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "../home";
import Signup from "../signup";
import Login from "../login";
import Card from "../card";

export default class Routes extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/card" component={Card} />

                    </div>
                </Router>
            </div>
        );
    }
}

