var express = require('express');
var router = express.Router();

router.get('/cool', function(req, res, next) {
  res.render('cool', { title: 'Cool' });
});

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

module.exports = router;
