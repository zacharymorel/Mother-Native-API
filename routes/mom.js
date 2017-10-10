var express = require('express');
var router = express.Router();
var models = require('../models')
var checkJwt = require('../middleware/jwt')

// ==================================
// ==== CONTRACTION AND MOM LOG =====
// ==================================



// ===================================
// ====== USER PROFILE PAGE ==========
// ===================================
router.get('/', checkJwt, function(req, res, next) {
  res.json({message: 'this is profile data'})
});



module.exports = router;