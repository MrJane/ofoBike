import React,{Component} from 'react';
import { message, Button } from 'antd';
class Messages extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                {
                    message.info('This is a normal message',10)
                }
            </div>
        )
    }
}
export default Messages