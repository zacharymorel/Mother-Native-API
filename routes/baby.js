var express = require('express');
var router = express.Router();
var models = require('../models')

// =================================
//  HANDLE BABY AND BABY LOG ROUTES 
// =================================


// =================================
// === ALL BABIES FOR USERID =======
// =================================
router.get('/baby', (req, res) => {
    // models.BabyTable.findAll({
    //   where: {
    //     userId: req.user.userid
    //   }
    // })
  res.json({message: "you've made it!"});
});





module.exports = router;
