import React, {Component} from 'react';
import { Card, Button, Table, Form, Select, Modal, message } from 'antd';
const FormItem = Form.Item
class City extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Card>
                    <Form layout="inline">
                        <FormItem label="城市">
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <option value="">全部</option>
                                <option value="1">北京市</option>
                                <option value="2">天津市</option>
                                <option value="3">深圳市</option>
                            </Select>
                        </FormItem>
                        <FormItem label="运营模式">
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <option value="">全部</option>
                                <option value="1">北京市</option>
                                <option value="2">天津市</option>
                                <option value="3">深圳市</option>
                            </Select>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default City