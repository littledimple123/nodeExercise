var mongoose = require('mongoose')

var Schema = mongoose.Schema

//1.连接数据库  指定连接的数据库不需要存在，当插入第一条数据即可创建
mongoose.connect('mongodb://localhost/itcast')

//2.设计集合结构（表结构）
var userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

//3.将文档结构发布为模型
//   mongoose.modle 方法就是用来将一个架构发布为module，
//   第一个参数：穿融入一个大写名词单数字符串用来表示的数据库名称
//              mongoose会自动将大写的字符串生成小写复数的集合名称
//   第二个参数：架构 Schema
//   返回值：模型构造函数
var User = mongoose.model('User', userSchema)

//4.增删改查
//增加

// var admin = new User({
//     userName: 'wangwu',
//     password: '123456',
//     email: 'admin@admin.com'
// })

// admin.save(function(err, ret) {
//     if (err) {
//         console.log('保存失败' + err)
//     } else {
//         console.log('保存成功' + ret)
//     }
// })

//查询数据
//查询所有
User.find(function(err, ret) {
    if (err) {
        console.log(err)
    } else {
        console.log(ret)
    }
})

//按条件查询单个
// User.findOne({ userName: 'admin' }, function(err, ret) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(ret)
//     }
// })

//按条件查询所有
// User.find({ userName: 'admin' }, function(err, ret) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(ret)
//     }
// })

//删除
// User.remove({ userName: 'admin' }, function(err, ret) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(ret)
//     }
// })

//更新
// User.findByIdAndUpdate("5bff8a56392802049c53ed75", { password: "654789" }, function(err, ret) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(ret)
//     }
// })