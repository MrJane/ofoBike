import React from 'react'
import {Card, Table} from 'antd';
import axios from '../../axios'

export default class BasicTabel extends React.Component {
    constructor(props){
        super(props);
        this.state={data:[]}
    }
    componentDidMount() {
        axios.ajax({
            url:'/api/table/list',
            data:{
                param:{page:1}
            }
        }).then((res)=>{
            this.setState({
                tableList:res.data.result
            })
        });

        const dataSource = [
            {
                id:1,
                userName:'刘磊',
                age:24,
                sex:'男',
                status:1,
                hobby:'打篮球',
                birthday:'2017-9-25',
                time:'09:30',
                address:'西湖区湖底公园1号'
            },
            {
                id:1,
                userName:'刘磊',
                age:24,
                sex:'男',
                status:1,
                hobby:'打篮球',
                birthday:'2017-9-25',
                time:'09:30',
                address:'西湖区湖底公园1号'
            },
            {
                id:1,
                userName:'刘磊',
                age:24,
                sex:'男',
                status:1,
                hobby:'打篮球',
                birthday:'2017-9-25',
                time:'09:30',
                address:'西湖区湖底公园1号'
            }
        ]
        this.setState({
            data:dataSource
        })
    }

    render() {
        //定义columns表头列:title=>表头显示的内容；dataIndex=>返回数据源的一个字段；
        const columns = [
            {title: 'ID', dataIndex: 'id', key: 'name',},
            {
                title: '用户名',
                dataIndex: 'userName',

                key: 'userName'},
            {title: '年龄', dataIndex: 'age', key: 'age',},
            {
                title: '性别',
                dataIndex: 'sex',
                render(sexs){
                    return sexs===1?'男':'女'//render函数处理当前字段dadaIndex 参数是sex
                },
                key: 'sex'},
            {
                title: '状态',
                dataIndex: 'status',
                render( status){
                    const config = {
                        '1':'前端工程',
                        '2':'后端工程师',
                        '3':'测试工程师'
                    }
                    return config[status]
                },
                key: 'status'},
            {title:'爱好',dataIndex:'hobby',key:'hobby'},
            {title:'生日',dataIndex:'birthday',key:'birthday'},
            {title:'早起时间',dataIndex:'time',key:'time'},
            {title: '住址', dataIndex: 'address', key: 'address',}
        ];
        const rowSelection = {
            type:'radio'
        }
        return (
            <div>
                <Card title="基础表格" style={{margin:'10px 0px'}}>
                    <Table
                        bordered={true}
                        columns={columns}
                        dataSource={this.state.data}
                        pagination={false}
                    />
                    {/*bordered:加边框；pagination：分页*/}
                </Card>
                <Card title="动态表格">
                    <Table
                        onRow={(record) => {
                            return {
                                onClick: () => {},       // 点击行
                                onMouseEnter: () => {},  // 鼠标移入行
                            }}}
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={this.state.tableList}
                    />
                    {/*bordered:加边框；pagination：分页*/}
                </Card>
            </div>
        )
    }
}