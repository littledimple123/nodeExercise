var express = require('express')
var path = require('path')

var app = express()

//开放public 和 node_modules 文件夹
app.use('/public', express.static(path.join(__dirname, "./public")))
app.use('/node_modules', express.static(path.join(__dirname, "./node_modules")))

app.get('', function(req, res) {
    res.send('hello')
})

//设置端口
app.listen(3000, function() {
    console.log('running...')
})