/**
 * 数据操作文件模块
 * 不涉及业务，只对文件进行操作，增 删 改 查
 */
var fs = require('fs')

var dbpath = './db.json'

 /**
  * 获取所有学生列表
  */

 exports.find = function (callback) {
  fs.readFile(dbpath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}

/** 
 * 根据id获取学生信息对象
*/

exports.findById = function (id, callback) { 
  fs.readFile(dbpath, 'utf8', function (err, data) { 
    if (err) { 
      return callback(err)
    }
    var students = JSON.parse(data).students
    var ret = students.find(function (item) { 
      return item.id === parseInt(id)
    })
    callback(null, ret)
  })
}
/**
  * 添加保存学生
  */

exports.save = function (student, callback) {
  fs.readFile(dbpath, 'utf8', function (err, data) { 
    if (err) { 
      return callback(err)
    }
    //把json字符串转化成json对象
    var students = JSON.parse(data).students

    //添加id
    student.id = students[students.length - 1].id + 1

    //把用户传递的对象保存到数组中
    students.push(student)

    //把对象数据转换为字符串
    var fileData = JSON.stringify({
      students:students
    })

    //把字符串保存到文件中
    fs.writeFile(dbpath, fileData, function (err) { 
      if (err) { 
        return callback(err)
      }
      callback(null)
    })
  })
}

/**
* 更新学生
*/

exports.update = function (student, callback) {
  fs.readFile(dbpath, 'utf8', function (err, data) {
    if (err) { 
      return callback(err)
    }
    var students = JSON.parse(data).students

    //把id统一转换为数字类型
    student.id = parseInt(student.id)

    //es6提供一个方法find  
    //需要接收一个函数作为函数  当某个遍历项符合 item.id === student.id 条件，终止遍历，同时返回遍历项
    var stu = students.find(function (item) {
      return item.id === student.id
    })
    
    //遍历拷贝对象
    for (var key in student) { 
      stu[key] = student[key]
    }

    //把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students
    })

    //把字符串保存在文件中
    fs.writeFile(dbpath, fileData, function (err) {
      if (err) {
        return callback(err)
      }
      callback(null)
     })
   })
}

/**
* 删除学生
*/

exports.deleteById = function (id, callback) {
  fs.readFile(dbpath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students

    // findIndex 方法专门用来根据条件查找元素的下标
    var deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id)
    })

    // 根据下标从数组中删除对应的学生对象
    students.splice(deleteId, 1)

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students
    })

    // 把字符串保存到文件中
    fs.writeFile(dbpath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没错，所以错误对象是 null
      callback(null)
    })
  })
}