import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './container/Login';
import NoMatch from './container/NoMatch'
import Buttons from './component/UI/Button';
import Gallery from './component/UI/Gallery';
import Loading from './component/UI/Loadings';
import Modal from './component/UI/Modals';
import Notice from './component/UI/Notice';
import Message from './component/UI/Messages';
import Tabs from './component/UI/Tabs';
import Carousel from './component/UI/Carousel';
import City from './container/City'

class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/login" component={Login}></Route>

                        <Route path="/" render={() => {
                            return (
                                <Admin>
                                    <Switch>
                                        <Route path="/ui/buttons" component={Buttons}></Route>
                                        <Route path="/ui/garllery" component={Gallery}></Route>
                                        <Route path="/ui/loading" component={Loading}></Route>
                                        <Route path="/ui/modal" component={Modal}></Route>
                                        <Route path="/ui/notification" component={Notice}></Route>
                                        <Route path="/ui/messages" component={Message}></Route>
                                        <Route path="/ui/tabs" component={Tabs}></Route>
                                        <Route path="/ui/carousel" component={Carousel}></Route>
                                        <Route path="/form/login" component={Login}></Route>
                                        <Route path="/city" component={City}></Route>
                                        <Route component={NoMatch}></Route>
                                    </Switch>
                                </Admin>
                            )
                        }}>
                        </Route>
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default IRouter