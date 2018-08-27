import React,{Component} from 'react';
import {Card,Button,notification} from 'antd'
class Notice extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <Card>
                    <Button>open one notice</Button>
                    {
                        notification.open({
                            message: 'Notification Title',
                            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                        })
                    }
                </Card>
            </div>
        )
    }
}
export default Notice