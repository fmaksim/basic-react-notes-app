import React, { Component } from 'react';
import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import Navbar from "../common/Navbar";
import { AlertState } from "../context/alert/AlertState";
import Alert from "../common/Alert";

class App extends Component {
    render() {
        return (
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container wrapper">
                        <Alert />
                        <Switch>
                            <Route path={ '/' } exact component={ Home }/>
                            <Route path={ '/about' } component={ About }/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        );
    }
}

export default App;
