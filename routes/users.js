var express = require('express');
var router = express.Router();

// 


// ===================================
// ====== USER PROFILE PAGE ==========
// ===================================
router.get('/profile', function(req, res, next) {
  res.json({message: 'this is profile data'})
});



module.exports = router;
