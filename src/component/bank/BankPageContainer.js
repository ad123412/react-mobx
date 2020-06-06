import React, {Component} from 'react';
import Bank from "./Bank";
import BankHome from './BankHome'
import AddAccount from "./AddAccount";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class BankPageContainer extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav>
                        <ul>
                            <li style={{display: 'inline', float: 'center'}}>
                                <Link to="/">Home </Link>
                            </li>
                            <li style={{display: 'inline', float: 'center'}}> |</li>
                            <li style={{display: 'inline', float: 'center'}}>
                                <Link to="/add-account"> Add Account </Link>
                            </li>
                            <li style={{display: 'inline', float: 'center'}}> |</li>
                            <li style={{display: 'inline', float: 'center'}}>
                                <Link to="/accounts"> Accounts </Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact><BankHome/></Route>
                        <Route path="/add-account"><AddAccount/></Route>
                        <Route path="/accounts"><Bank/> </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default BankPageContainer;