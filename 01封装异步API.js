
//如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取

function fn(callback) {
  //调fu时相当于  var callback = function (data) { console.log(data) }
  setTimeout(function () { 
    var data = 'hello'
    callback(data)
  },1000)
}
fn(function (data) { 
  console.log(data)
})