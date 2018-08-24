import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './container/Login';
import NoMatch from './container/NoMatch'
import Buttons from './component/Buttons'
class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={() => {
                        return (
                            <Admin>
                                <Switch>
                                    <Route path="/admin/buttons" component={Buttons}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        )
                    }}>
                    </Route>
                </App>
            </Router>
        )
    }
}
export default IRouter