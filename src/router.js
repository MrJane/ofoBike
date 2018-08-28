import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './container/Login';
import NoMatch from './container/NoMatch'
import Buttons from './component/UI/Button';
import Gallery from './component/UI/Gallery';
import Tabel from './component/Tabel'
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
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/admin/ui/garllery" component={Gallery}></Route>
                                    <Route path="/admin/ui/tabel" component={Tabel}></Route>
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