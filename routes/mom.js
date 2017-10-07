var express = require('express');
var router = express.Router();
var models = require('../models')

// ==================================
// ==== CONTRACTION AND MOM LOG =====
// ==================================



// ===================================
// ====== USER PROFILE PAGE ==========
// ===================================
router.get('/', function(req, res, next) {
  res.json({message: 'this is profile data'})
});



module.exports = router;
