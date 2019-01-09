var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var router = require('./router') //引文件时必须加./
var session = require('express-session')

var app = express()

//开放public 和 node_modules 文件夹
app.use('/public', express.static(path.join(__dirname, "./public")))
app.use('/node_modules', express.static(path.join(__dirname, "./node_modules")))

//配置 express-art-template
app.engine('html', require('express-art-template'))

//html 默认路径是views 如需修改可通过以下一行代码修改
app.set('views', path.join(__dirname, './views/'))


// 配置中间件，只要加入这个配置，则在req请求对象上会多出来一个属性：body, 可以直接通过req.body来获取表单POST请求体数据了
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置express-session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

//把路由挂载到 app 中
app.use(router)

//配置一个处理404的中间件

app.use(function(req, res) {
    req.render('404.html')
})



//设置端口
app.listen(3000, function() {
    console.log('running...')
})