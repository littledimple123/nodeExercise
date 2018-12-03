var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/itstudent')

var Schema = mongoose.Schema

var commentSchema = new Schema({

})

module.exports = mongoose.model('Student', commentSchema)