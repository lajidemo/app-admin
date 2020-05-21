// 拦截指定axios请求，返回mock数据

import Mock from 'mockjs'
import common from './common'

Mock.mock(common.test, {
  "ret":0,
  "data":
    {
      "mtime": "@datetime",//随机生成日期时间
      "score|1-800": 800,//随机生成1-800的数字
      "rank|1-100":  100,//随机生成1-100的数字
      "stars|1-5": 5,//随机生成1-5的数字
      "nickname": "@cname",//随机生成中文名字
    }
})

Mock.setup({
  timeout: 400
})