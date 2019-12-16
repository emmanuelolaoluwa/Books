var mongoose = require('mongoose');
var JobSchema = new mongoose.Schema({
    isbn: Number,
    title: String,
    author: String,
    publish_date: { type: Date, default: Date.now },
    publisher: String,
    numbOfPages: Number
});

module.exports = mongoose.model('Job', JobSchema);