//用户数据库
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test') //连接数据库

var Schema = mongoose.Schema

var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creat_time: {
        type: Date,
        //注意：这里不要写Date.now() 因为会即刻调用，相当于直接写死时间戳
        //直接给一个方法，当new Model的时候， 如果没传递creat_time,则mongoose 就会调用default 指定的Date.now 方法，使用其返回值作为默认值
        default: Date.now
    },
    last_modify_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: './public/img/avatar-default.png'
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        type: Number,
        enum: [0, 1, 2],
        default: 0
    }
})
module.exports = mongoose.model('User', userSchema)