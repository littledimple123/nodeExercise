var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(1)
    }, 3000)
})

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(2)
    }, 1000)
})

//Promise.all 可以接受一个元素的Promise对象的数组作为参数，当这个数组里面所有的promise对象都变为resolve时，该方法才会返回
//promise1对象中的setTimeout是3秒的时间，而promise2对象中的setTimeout是1秒的时间，但是在Promise.all方法中会按照数组的原先顺序将结果返回；

Promise.all([promise1, promise2]).then(function(data) {
    console.log(data)
})