var express = require('express');
var router = express.Router();

router.get('/play', (req, res, next) => {
  res.render('play.hbs');
});

module.exports = router;
