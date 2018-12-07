var express = require('express')
var path = require('path')
    //引文件时必须加./
var router = require('./router')

var app = express()

//开放public 和 node_modules 文件夹
app.use('/public', express.static(path.join(__dirname, "./public")))
app.use('/node_modules', express.static(path.join(__dirname, "./node_modules")))

//配置 express-art-template
app.engine('html', require('express-art-template'))

//html 默认路径是views 如需修改可通过以下一行代码修改
app.set('views', path.join(__dirname, './views/'))

//把路由挂载到 app 中
app.use(router)

//设置端口
app.listen(3000, function() {
    console.log('running...')
})