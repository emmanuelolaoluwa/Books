var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/* GET ALL BOOKS */

router.get('/', function(req, res, next) {
 Book.find(function (err, books) {
   if (err) return next(err);
    res.render('book-list.ejs', { books: books });
 });
});


/* GET SINGLE BOOK BY ID */

router.get('/:id', function(req, res, next) {
 Book.findById(req.params.id, function (err, book) {
   if (err) return next(err);
   //res.render('edit.ejs', { book });
 });
});

/* SEARCH BOOK */

router.post('/search', function(req, res, next) {
  const isbn = req.body.isbn;
  Book.findOne({ isbn }, function (err, book) {
    if (err) return next(err);
    res.render('book-list.ejs', { book });
  });
 });

/* SAVE BOOK */

router.post('/save', function(req, res, next) {
  Book.create({ ...req.body, numOfPages: parseInt(req.body.numOfPages) }, function (err, book) {
    if (err) return next(err);
    return res.redirect('/books');
  });
});

/* UPDATE BOOK */

router.get('/:id/edit', function(req, res, next) {
  Book.findById(req.params.id, function (err, book) {
    if (err) return next(err);
    console.log(book);
    res.render('edit.ejs', { book });
  });
 });

router.post('/:id/edit', function(req, res, next) {
 Book.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
   if (err) return next(err);
   res.redirect('/books');
 });
});

/* DELETE BOOK */

router.get('/:id/delete', function(req, res, next) {
 Book.findByIdAndRemove(req.params.id, function (err, books) {
   if (err) return next(err);
   res.redirect('/books');
 });
});

module.exports = router;