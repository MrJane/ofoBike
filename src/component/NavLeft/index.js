import React from 'react';
import {Menu, Icon} from 'antd';
import MenuConfig from '../../config';
import 'antd/dist/antd.css'
import './style.css';
import MenuItem from 'antd/lib/menu/MenuItem';
import LogoPic from '../../static/images/logo-ant.svg'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
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
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src={LogoPic}  alt=""></img>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }

}