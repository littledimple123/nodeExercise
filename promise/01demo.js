var fs = require('fs')

//创建Promise 容器
var p1 = new Promise(function(resolve, reject) {
    fs.readFile('a.txt', 'utf8', function(err, data) {
        if (err) {
            //失败调用reject 往下传递参数，且只接受一个参数
            reject(err)
        } else {
            //成功调用resolve 往下传递参数，且只接受一个参数
            resolve(data)
        }
    })
})

var p2 = new Promise(function(resolve, reject) {
    fs.readFile('b.txt', 'utf8', function(err, data) {
        if (err) {
            //承诺失败容器中任务失败了
            //把容器的Pending的状态变为 Rejected
            reject(err)
        } else {
            //承诺容器中任务成功了
            //把容器的Pending的状态变为成功 Resolve
            resolve(data)
        }
    })
})

var p3 = new Promise(function(resolve, reject) {
    fs.readFile('c.txt', 'utf8', function(err, data) {
        if (err) {
            //承诺失败容器中任务失败了
            //把容器的Pending的状态变为 Rejected
            reject(err)
        } else {
            //承诺容器中任务成功了
            //把容器的Pending的状态变为成功 Resolve
            resolve(data)
        }
    })
})

p1
    .then(function(data) {
        console.log(data)
            //当p1读取成功的时候，return 一个Promise 对象的时候，后续的 then 中的方法的第一个参数会作为 P2 的 resolve
        return p2
    }, function(err) {
        console.log("读取失败" + err)
    })
    .then(function(data) {
        console.log(data)
        return p3
    })
    .then(function(data) {
        console(data)
    })