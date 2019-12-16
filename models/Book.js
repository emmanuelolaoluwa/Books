var mongoose = require('mongoose');
var bookSchema = new mongoose.Schema({
    isbn: Number,
    title: String,
    subtitle: String,
    author: String,
    publish_date: { type: Date, default: Date.now },
    publisher: String,
    numOfPages: Number,
    description: String,
    website: String
});

module.exports = mongoose.model('Book', bookSchema);