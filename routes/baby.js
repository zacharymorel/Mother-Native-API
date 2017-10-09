var express = require('express');
var router = express.Router();
var models = require('../models')
// var checkJwt = require('../middleware/jwt')
// const cors = require('cors');
// router.use(cors()); 


// =================================
//  HANDLE BABY AND BABY LOG ROUTES 
// =================================


// =================================
// === ALL BABIES FOR USERID =======
// =================================
router.get('/', (req, res, next) => {
  console.log('1', user)
    // models.BabyTable.findAll({
    //   where: {
    //     userId: req.user.user_id
    //   }
    // })
  res.json({message: "you've made it!"});
});



module.exports = router;
