import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import { CreatePost} from '../../containers'
import ContactForm from "./ContactForm";
import HomePage from "./home-page";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    
                    <Route path="./home-page.js" component={HomePage} />
                </Switch>
            </Router>
        )
    }
}