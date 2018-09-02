import axios from 'axios'
import {Modal} from 'antd';
export default class Axios {
    static ajax(options) {
        let baseUrl = 'https://www.easy-mock.com/mock/5b89df9b3da6cd09e722052a';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method: 'get',
                baseURL: baseUrl,
                params: (options.data&&options.data.param)||'',
                timeout:5000
            }).then((response)=>{
                if(response.status===200){
                    if(response.data.code===0){
                        resolve(response)
                    }else {
                        Modal.info({
                            title:'提示',
                            content:response.data.msg
                        })
                    }
                }else {
                    reject(response.data)
                }
            });
        })
    }
}