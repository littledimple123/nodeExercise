//不成立

// function add(x, y) {
//   console.log(1)
//   setTimeout(function () { 
//     console.log(2)
//     var ret = x + y
//     return ret
//   }, 1000)
//   console.log(3)
// }
// console.log(add(10, 20))   //1  3  undefined  2

// function add(x, y) {
//     var ret
//     console.log(1)
//     setTimeout(function () { 
//       console.log(2)
//       ret = x + y
     
//     }, 1000)
//   console.log(3)
//   return ret
//   }
//   console.log(add(10, 20))   //1  3  undefined  2

function add(x, y, callback) {
  //callback 是回调函数
  // var x = 10
  // var y = 20
  // var callback = function(a){ console.log(a) }
  console.log(1)
  setTimeout(function () { 
    var ret = x + y
    callback(ret) // ret是实参
  },1000)
}
add(10, 20, function (a) {
  //a 才是我们得到的结果  a 是形参
  console.log(a)
 }) 