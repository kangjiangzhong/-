// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
cloud.init()
let httpUrl = 'https://api.apiopen.top/getJoke'
// 云函数入口函数
exports.main = async (event, context) => {
 

  const wxContext = cloud.getWXContext()
     let result = await axios.get(httpUrl,{parmas:event})
     return result.data
  
}