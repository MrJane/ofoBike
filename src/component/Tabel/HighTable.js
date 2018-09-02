import React, {Component} from 'react';
import {Card, Table,Badge } from 'antd';
import axios from '../../axios'

class HighTable extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        axios.ajax({
            url: '/api/table/list',
            data: {
                param: {page: 1}
            }
        }).then((res) => {
            this.setState({
                tableList: res.data.result
            })
        });
        console.log(this.state.tableList)
    }

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder:sorter.order
        })
    }

    render() {
        const columns = [
            {title: 'ID', dataIndex: 'id', width: 80, key: 'name'},
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                key: 'userName'
            },
            {title: '年龄', dataIndex: 'age', width: 80, key: 'age',},
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sexs) {
                    return sexs === 1 ? '男' : '女'//render函数处理当前字段dadaIndex 参数是sex
                },
                key: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'status',
                width: 80,
                render(status) {
                    const config = {
                        '1': '前端工程',
                        '2': '后端工程师',
                        '3': '测试工程师'
                    }
                    return config[status]
                },
                key: 'status'
            },
            {title: '爱好', dataIndex: 'hobby', width: 80, key: 'hobby'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '早起时间', dataIndex: 'time', width: 80, key: 'time'},
            {title: '住址', dataIndex: 'address', width: 80, key: 'address',}
        ];
        const columns2 = [
            {title: 'ID', dataIndex: 'id', width: 80, key: 'name',},
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                key: 'userName'
            },
            {title: '年龄', dataIndex: 'age', width: 80, key: 'age',},
            {
                title: '性别',
                dataIndex: 'sex', fixed: 'left',
                width: 80,
                render(sexs) {
                    return sexs === 1 ? '男' : '女'//render函数处理当前字段dadaIndex 参数是sex
                },
                key: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'status',
                width: 80,
                render(status) {
                    const config = {
                        '1': '前端工程',
                        '2': '后端工程师',
                        '3': '测试工程师'
                    }
                    return config[status]
                },
                key: 'status'
            },
            {title: '爱好', dataIndex: 'hobby', width: 80, key: 'hobby'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '早起时间', dataIndex: 'time', width: 80, key: 'time'},
            {title: '住址', dataIndex: 'address', width: 80, key: 'address',}
        ];
        const columns3 = [
            {title: 'ID', dataIndex: 'id', width: 80, key: 'name'},
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                key: 'userName'
            },
            {
                title: '年龄',
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age
                    //参数a,b是列的对象
                },
                sortOrder: this.state.sortOrder,
                width: 80,
                key: 'age',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sexs) {
                    return sexs === 1 ? '男' : '女'//render函数处理当前字段dadaIndex 参数是sex
                },
                key: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'status',
                width: 80,
                render(status) {
                    const config = {
                        '1': <Badge status="error" text="前端工程师"/>,
                        '2': '后端工程师',
                        '3': '测试工程师'
                    }
                    return config[status]
                },
                key: 'status'
            },
            {title: '爱好', dataIndex: 'hobby', width: 80, key: 'hobby'},
            {title: '生日', dataIndex: 'birthday', width: 80, key: 'birthday'},
            {title: '早起时间', dataIndex: 'time', width: 80, key: 'time'},
            {title: '住址', dataIndex: 'address', width: 80, key: 'address',}
        ];
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        columns={columns}
                        dataSource={this.state.tableList}
                        scroll={{y: 300}}
                    >
                        {/*表头固定设置：给scroll设置y方向多少，表头设置width宽度才能对齐*/}
                    </Table>
                </Card>
                <Card title="左侧固定">
                    <Table
                        columns={columns2}
                        dataSource={this.state.tableList}
                        pagination={false}
                        scroll={{x: 1600}}
                    >
                        {/*表头固定设置：给scroll设置x方向多少，表头设置width宽度，要在哪个表头设置固定加上fixed属性：left或者right才*/}
                    </Table>
                </Card>
                <Card title="表格字段排序">
                    <Table
                        columns={columns3}
                        dataSource={this.state.tableList}
                        onChange={this.handleChange}
                    >
                        {/*表头固定设置：给scroll设置y方向多少，表头设置width宽度才能对齐*/}
                    </Table>
                </Card>
            </div>
        );
    }
}

export default HighTable;