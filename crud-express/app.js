var express = require('express')
var router = require('./router')  //引入router.js 得到一个function 
var bodyParser = require('body-parser')

var app = express()

app.use('/views/', express.static('./views/'))
app.use('/public/',express.static('./public/'))

app.engine('html', require('express-art-template'))
//配置模板引擎和body-parser 一定要在app.use(router)之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//方法一中   调用这个方法，传入app参数  
//router(app)

//把路由容器挂载到app服务中
app.use(router)

app.listen(3000,function() {
	console.log('running....')
})