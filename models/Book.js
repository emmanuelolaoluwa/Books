var mongoose = require('mongoose');
var bookSchema = new mongoose.Schema({
    isbn: Number,
    title: String,
    subtitile: String,
    author: String,
    publish_date: { type: Date, default: Date.now },
    publisher: String,
    numbOfPages: Number,
    description: String
});

module.exports = mongoose.model('Job', bookSchema);