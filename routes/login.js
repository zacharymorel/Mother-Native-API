var express = require('express');
var router = express.Router();

// =================================
// === LOGIN PAGE ==================
// =================================

router.get('/login', function(req, res, next) {
  res.send({message: "you've made it!"});
});

// ==================================
// === SING UP PAGE =================
// ==================================




module.exports = router;
