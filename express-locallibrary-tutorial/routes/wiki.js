/* // wiki.js - Wiki route module.

const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
router.get("/users/:userId/books/:bookId", (req, res) => {
    // Access userId via: req.params.userId
    // Access bookId via: req.params.bookId
    res.send(req.params.userId);
    res.send(req.params.bookId);
  });

module.exports = router; */