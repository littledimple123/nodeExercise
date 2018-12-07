var express = require('express')

var router = express.Router()

router.get('/', function(req, res) {
    res.render('index.html')
})

router.get('/login', function(req, res) {
    res.render('index.html')
})





module.exports = router