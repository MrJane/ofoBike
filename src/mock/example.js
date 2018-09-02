var data = {
    "code": 0,
    "msg": "成功",
    "data|10": [{ //data|10=>表示10数据
        'id|+1': 0, //'id|+1'=>id每次加1：'id|+1'要用引号，0不能用引号用数字number类型
        userName: '@cname',//'@cname'=>获取中文名字
        age: '24',
        'sex|0-1': 0,//同上id用法
        'status|1-4': 1,//'status|1-4'=>表示值是1-4之间的值：值(1)：用number数字，如果用引号变成字符串就会连接不会获取1-4之间的值
        hobby: '打篮球',
        birthday: '2017-9-25',
        time: '09:30',
        address: '西湖区湖底公园1号'
    }]
}