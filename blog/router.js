var express = require('express')
var User = require('./models/user')
var md5 = require('blueimp-md5')

var router = express.Router()

router.get('/', function(req, res) {
    // console.log(req.session.user)
    res.render('index.html', {
        user: req.session.user
    })
})



router.get('/login', function(req, res) {
    res.render('login.html')
})

router.post('/login', function(req, res, next) {
    //1、 获取表单数据
    //2、 查询数据库用户名和密码是否正确
    //3、 发送响应数据

    var body = req.body;

    User.findOne({
        email: body.email,
        password: md5(md5(body.password))
    }, function(err, user) {
        if (err) {
            //return next(err)
            return res.status(500).json({
                err_code: 500,
                message: err.message
            })
        }
        //如果邮箱和密码匹配， 则user是查询的用户对象，否则就是null
        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or password is invalid'
            })
        }
        //用户存在，登陆成功，通过session记录登录状态
        req.session.user = user
        res.status(200).json({
            err_code: 0,
            message: 'OK'
        })
    })
})

router.get('/register', function(req, res) {
    res.render('register.html')
})


router.post('/register', function(req, res) {
    var body = req.body
    User.findOne({
        $or: [{
                email: body.email
            },
            {
                nickname: body.nickname
            }
        ]
    }, function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error'
            })

        }
        if (data) {
            //表单异步提交  前端涉及ajax 
            return res.status(200).json({
                err_code: 1,
                message: 'Email or nickname aleady exists'
            })


            //表单同步提交不涉及前端js
            // return res.render('register.html', {
            //     err_message: '邮箱或昵称已存在',
            //     form: body
            // })


        }
        // 对密码进行 md5 重复加密
        body.password = md5(md5(body.password))
        new User(body).save(function(err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'Internal error'
                })
            }
            //注册成功，使用session记录用户的登录状态
            req.session.user = user


            res.status(200).json({
                err_code: 0,
                message: 'OK'

            })
        })

    })
})

router.get('/logout', function(req, res) {
    //清除登录状态
    req.session.user = null
        //重定向到登录页
    res.redirect('./login')
})


module.exports = router