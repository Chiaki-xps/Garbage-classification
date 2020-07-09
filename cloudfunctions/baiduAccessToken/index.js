const rq = require('request-promise')
// 
/**
 * 获取百度ai AccessToken
 */
exports.main = async(event, context) => {
  let apiKey = '6QZ8rs6rx5f7Vezyu4WGqXyP',
    grantType = 'client_credentials',
    secretKey = 'pRG9SGRjh5Pv1HmzE4cbhnQO4geUbvqO',
    url = `https://aip.baidubce.com/oauth/2.0/token`

   return  await rq({
        method: 'POST',
        url,
        form: {
          "grant_type": grantType,
          "client_secret": secretKey,
          "client_id": apiKey
        },
        json: true
      }).then(data=>{
        return Promise.resolve({
          code: 0,
          data,
          info: '操作成功！'
        })
     }).catch(error=>{
        console.log(error)
        if (!error.code){
          return Promise.reject(error)
        } 
        return error
      })
}