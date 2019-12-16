var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

const bodyParser = require('body-parser');

/* GET ALL BOOKS */

router.get('/', function(req, res, next) {
 Book.find(function (err, books) {
   if (err) return next(err);
   res.json(books);
 });
});

/* GET SINGLE BOOK BY ID */

router.get('/:id', function(req, res, next) {
 Book.findById(req.params.id, function (err, post) {
   if (err) return next(err);
   res.json(post);
 });
});

/* SAVE BOOK */

router.post('/save', function(req, res, next) {
 Book.create(req.body, function (err, post) {
    res.send('respond with a resource');
    res.send('Book is added to the database');
    if (err) return next(err);
    console.log(book);
    res.json(post);
 });
});

/* UPDATE BOOK */

router.put('/:id', function(req, res, next) {
 Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
   if (err) return next(err);
   res.json(post);
 });
});

/* DELETE BOOK */

router.delete('/:id', function(req, res, next) {
 Job.findByIdAndRemove(req.params.id, req.body, function (err, post) {
   if (err) return next(err);
   res.json(post);
 });
});

module.exports = router;