//引包
var express=require('express')

//创建服务器应用程序

var app = express()

// app.use('/public/',express.static('./public/'))

// app.get('/', function(req, res) {
// 	//express中可以直接req.query来获取查询字符串参数
// 	console.log(req.query)
// 	res.send('hello world')
// })
// app.listen(3000, function() {
// 	console.log('app is running...')
// })


app.get('/',function(req, res) {
	res.send('hello world')
})

app.get('/login',function(req, res) {
	res.send('login page')
})

app.listen(3000, function() {
	console.log('app is running...')
})
