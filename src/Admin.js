import React, {Component} from 'react';
import {Row, Col} from 'antd'
import Header from './component/Header';
import Footer from './component/Footer';
import NavLeft from './component/NavLeft';
import Home from './container/Home'
class Admin extends Component {
    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span={20} className="main">
                    <Header></Header>
                    <Row className="content">
                        {/*<Home></Home>*/}
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}

export default Admin