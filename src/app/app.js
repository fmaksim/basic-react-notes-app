import React, { Component } from 'react';
import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import Navbar from "../common/Navbar";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <div className="wrapper">
                    <Switch>
                        <Route path={ '/' } exact component={ Home }/>
                        <Route path={ '/about' } component={ About }/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
