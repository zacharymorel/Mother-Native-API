var express = require('express');
var router = express.Router();
var models = require('../models')
var checkJwt = require('../middleware/jwt')



// =================================
//  HANDLE BABY AND BABY LOG ROUTES 
// =================================


// =================================
// === ALL BABIES FOR USERID =======
// =================================
router.get('/', checkJwt, function (req, res, next) {
    // models.BabyTable.findAll({
    //   where: {
    //     userId: req.user.user_id
    //   }
    // })
  res.json({message: "you've made it!"});
});



module.exports = router;
