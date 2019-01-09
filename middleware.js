var express = require('express')
var fs = require('fs')
var app = express()
app.get('/', function(req, res, next) {
        fs.readFile('./a.txt', function(err, data) {
            if (err) {
                next(err)
            }
        })

    })
    // app.get('/a', function(req, res) {
    //     console.log(2)
    // })
    // app.get('/b', function(req, res) {
    //     console.log(3)
    // })
app.use(function(err, req, res, next) {
    res.status(500).send(err.message)
})
app.get('/a', function(req, res) {
    console.log(2)
})
app.listen(3000, function() {
    console.log('server is running....')
})