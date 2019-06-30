import React from 'react';
import {Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom'
import MenuConfig from '../../config';
import 'antd/dist/antd.css';
import './style.css';
import MenuItem from 'antd/lib/menu/MenuItem';
import LogoPic from '../../static/images/logo-ant.svg'

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }

    renderMenu = (data) => {
        return data.map((item, index) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                  <NavLink to="/admin/home">
                    <img src={LogoPic} alt=""></img>
                    <h1>Imooc MS</h1>
                  </NavLink>
                </div>
                <Menu theme="dark" mode="inline">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }

}