import React, { Component } from 'react';
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Routes from "./components/routes/routes";
import Card from "./components/card";
import Close from "./components/close";

class App extends Component {
    render() {
        return (
            <div>
                <Routes />
            </div>
        );
    }
}

export default App;
