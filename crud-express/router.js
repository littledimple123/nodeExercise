
var fs = require('fs')
var Student = require('./student')

//Express 提供了一种更好的方法，专门用来包装路由的
var express = require('express')

//1.创建路由容器
var router = express.Router()

//2.把路由都挂载到 router 路由容器中

/*
  渲染学生列表页
*/
router.get('/students', function (req, res) {
  // fs.readFile('./db.json', 'utf8',function (err, data) { 
  //   if (err) { 
  //     return res.status(500).send('Server error.')
  //   }
    
  //   res.render('index.html', {
  //     students:JSON.parse(data).students
  //   })
  // })
  Student.find(function (err, students) { 
    if (err) { 
      return res.status(500).send('Server error .')
    }
    res.render('index.html', {
      students: students
    })
  })
})

/*
  渲染添加学生列表页
*/
router.get('/students/new', function (req, res) { 
    res.render('new.html')
})
/*
  处理添加学生
*/
router.post('/students/new', function (req, res) {
    //1.获取表单数据
    //2 处理
    //3.发送响应
  //console.log(req.body)
  //读文件，转成对象; 往对象中push 数据; 把对象转为字符串, 把字符串写入文件
  Student.save(req.body, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})
/*
  渲染编辑学生页面
*/
router.get('/students/edit', function (req, res) { 
  //1. 在客户端的列表页中处理链接问题（需要id参数）
  //2. 获取要编辑的学生id
  //3. 渲染编辑页面
  //   根据id查学生信息     使用模板引擎渲染页面
  Student.findById(parseInt(req.query.id), function (err, student) { 
    if (err) { 
      return res.status(500).send('Server error.')
    }
    res.render('edit.html', {
      student:student
    })
  })
})
/*
  处理编辑学生
*/
router.post('/students/edit', function (req, res) { 
  // 1. 获取表单数据
  //    req.body
  // 2. 更新
  //    Student.updateById()
  // 3. 发送响应
  Student.update(req.body, function (err) { 
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})
/**
 * 处理删除学生
 */
router.get('/students/delete', function (req, res) {
  // 1. 获取要删除的 id
  // 2. 根据 id 执行删除操作
  // 3. 根据操作结果发送响应数据

  Student.deleteById(req.query.id, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})
 
//3. 把 router  导出
module.exports = router

//方法一   可行但是不太好

// module.exports = function (app) { 
//   app.get('/students', function (req, res) {
//     fs.readFile('./db.json', 'utf8',function (err, data) { 
//       if (err) { 
//         return res.status(500).send('Server error.')
//       }
      
//       res.render('index.html', {
//         students:JSON.parse(data).students
//       })
//     })
    
//   })
  
//   /*
//     渲染添加学生列表页
//   */
//   app.get('/students/new', function (req, res) { 
//       res.render('new.html')
//   })
//   /*
//     处理添加学生
//   */
//   app.post('/students/new', function (req, res) {
  
//   })
//   /*
//     渲染编辑学生页面
//   */
//   app.get('/students/edit', function (req, res) { 
    
//   })
//   /*
//     处理编辑学生
//   */
//   app.post('/students/edit', function (req, res) { 
    
//   })
//   /**
//    * 处理删除学生
//    */
//   app.get('/students/delect', function (req, res) { 
    
//   })
// }
