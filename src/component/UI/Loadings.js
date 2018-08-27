import React,{Component} from 'react';
import { Card, Spin ,Alert,Switch} from 'antd';
import './style.css'
class Loadings extends Component{
    constructor(props){
        super(props)
        this.state={visible:false}
    }
    render(){
        const indicator = <div>你好</div>
        return(
            <div>
                <Card title="基本用法" className="spin-wrap">
                    <Spin size="small" tip="加载中..." spinning={true} indicator={indicator}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <Spin size="large" spinning={false} />
                    <Switch></Switch>
                </Card>
            </div>
        )
    }
}
export default Loadings