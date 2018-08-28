import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './container/Login';
import NoMatch from './container/NoMatch'
import Buttons from './component/UI/Button';
import Gallery from './component/UI/Gallery';
<<<<<<< HEAD
import Tabel from './component/Tabel'
=======
import Loading from './component/UI/Loadings';
import Modal from './component/UI/Modals';
import Notice from './component/UI/Notice';
import Message from './component/UI/Messages';
import Tabs from './component/UI/Tabs';
import Carousel from './component/UI/Carousel';
import City from './container/City'

>>>>>>> d477142e15e7c9191a473729c49a2d52c5f3be9d
class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>
<<<<<<< HEAD
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
=======
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
>>>>>>> d477142e15e7c9191a473729c49a2d52c5f3be9d
                </App>
            </Router>
        )
    }
}

export default IRouter