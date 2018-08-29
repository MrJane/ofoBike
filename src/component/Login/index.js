import React, {Component} from 'react';
import {Card,Form,Input} from 'antd';
const FormItem = Form.Item
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Card title="登陆行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>

                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入用户名"/>

                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                    </Form>

                </Card>
            </div>
        )
    }
}

export default Login