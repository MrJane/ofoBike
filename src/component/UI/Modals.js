import React, {Component} from 'react';
import {Card, Modal, Button} from 'antd';

class Modals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            visible1: false,
            visible2: false
        }
    }

    showModal1 = () => {
        this.setState({
            visible1: !this.state.visible
        })
    }
    handleOk = () => {
        this.setState({
            visible: false
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    handleSubmit = () => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 1000)
    }
    showOneModal = () => {
        const modal = Modal.success({
            title: 'This is a notification message',
            content: 'This modal will be destroyed after 1 second'
        });
        setTimeout(()=>{
            modal.destroy()
        },2000)
    }

    render() {
        return (
            <div>
                <Card>
                    <Button onClick={this.showModal1} type="primary">open</Button>
                    <Modal
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        visible={this.state.visible1}
                        okText="确定"
                    >
                        <p>你好，你好</p>
                    </Modal>
                </Card>
                <Card>
                    <Button onClick={this.showModal} type="primary">打开</Button>
                    <Modal onOk={this.handleOk}
                           onCancel={this.handleCancel}
                           visible={this.state.visible}
                           footer={[
                               <Button key="back" onClick={this.handleCancel}>返回</Button>,
                               <Button loading={this.state.loading} key="submit" onClick={this.handleSubmit}>提交</Button>
                           ]}
                    >
                    </Modal>
                </Card>
                <Card>
                    <Button onClick={this.showOneModal}>打开一个Modal</Button>
                </Card>
            </div>
        )
    }
}

export default Modals