// function timerPromise(delay) {
//     return new Promise(function(resolve) {
//         setTimeout(() => {
//             resolve(delay)
//         }, delay);
//     })
// }

// //任何一个promise变成resolve或reject的话程序停止执行
// Promise.race([timerPromise(1), timerPromise(32), timerPromise(64)]).then(function(value) {
//     console.log(value)
// })


var rpromise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log(1)
        resolve(2)
    }, 300)
})


var rpromise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log(3)
        resolve(4)
    }, 1000)
})

//这种情况下，当一个promise对象变为(FulFilled)成功状态的时候，后面的promise对象并没有停止运行
Promise.race([rpromise1, rpromise2]).then(function(value) {
    console.log(value)
})