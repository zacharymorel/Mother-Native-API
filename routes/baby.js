var express = require("express");
var router = express.Router();
var models = require("../models");
var checkJwt = require("../middleware/jwt");

// =================================
//  HANDLE BABY AND BABY LOG ROUTES
// =================================

// =================================
// === ALL BABIES FOR USERID =======
// =================================
/**
 * @api {get} /api/baby Request All User Babies
 * @apiName GETAllUserBabies
 * @apiGroup Baby
 *
 * @apiParam {String} Payload id_Token UserId from Auth0.
 *
 * @apiSuccess {String} name Name of Baby
 * @apiSuccess {Date} duedate Baby Due Date
 * @apiSuccess {Date} birthdate Birthday of Baby
 * @apiSuccess {String} gender Gender of Baby
 */
router.get("/", checkJwt, function(req, res, next) {
  console.log("this user is ", req.user.sub);
  models.BabyTable
    .findAll({
      where: {
        userId: req.user.sub
      }
    })
    .then(babies => {
      res.json(babies);
    })
    .catch(err => {
      console.log("err: ", err);
    });
});

// ====================================
// === FIND SPECIFIC BABY BY USERID ===
// ====================================
/**
 * @api {get} /api/baby/:id Request Specific User Baby
 * @apiName GETSpecificUserBaby
 * @apiGroup Baby
 *
 * @apiParam {String} Payload id_Token UserId from Auth0.
 * @apiParam {Number} id The Baby id in URL.
 */
router.get("/:id", checkJwt, (req, res) => {
  models.BabyTable.findById(req.params.id).then(babyId => {
    res.json(babyId);
  });
});

// ====================================
// ====== EDIT SPECIFIC BABY ==========
// ====================================
/**
 * @api {put} /api/baby/:id Edit A Specific User Baby
 * @apiName PUTSpecificUserBaby
 * @apiGroup Baby
 *
 * @apiParam {String} Payload id_Token UserId from Auth0.
 * @apiParam {Number} id The Baby id in URL. 
 * @apiParam {String} name The Baby Name 
 * @apiParam {Date} duedate Duedate of Baby. 
 * @apiParam {Date} birthdate The Baby Brithday. 
 * @apiParam {String} gender The Baby Gender. 
 * 
 * @apiSuccess {String} name Edited Baby Name
 * @apiSuccess {Date} duedate Edited Duedate of Baby.
 * @apiSuccess {Date} birthdate Edited Baby Brithday.
 * @apiSuccess {String} gender Edited Baby Gender. 
 */
router.put("/:id", checkJwt, (req, res) => {
  models.BabyTable.findById(req.params.id).then(babyId => {
    babyId
      .update({
        name: req.body.name,
        duedate: req.body.duedate,
        birthdate: req.body.birthdate,
        gender: req.body.gender
      })
      .then(babyId => {
        res.json(babyId);
      });
  });
});

// ====================================
// ==== CREATE A NEW BABY =============
// ====================================
/**
 * @api {post} /api/baby/ Create A New User Baby
 * @apiName POSTNewUserBaby
 * @apiGroup Baby
 *
 * @apiParam {String} Payload id_Token UserId from Auth0.
 * @apiParam {Number} id The Baby id in URL. 
 * @apiParam {String} name The Baby Name 
 * @apiParam {Date} duedate Duedate of Baby. 
 * @apiParam {Date} birthdate The Baby Brithday. 
 * @apiParam {String} gender The Baby Gender. 
 * 
 * @apiSuccess {Array} Empty Emptry Array
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Creation successful"
 *     }
 */
router.post("/", checkJwt, (req, res) => {
  console.log("this user is ", req.user.sub);
  const baby = models.BabyTable
    .build({
      userId: req.user.sub,
      name: req.body.name,
      duedate: req.body.duedate,
      birthdate: req.body.birthdate,
      gender: req.body.gender
    })
    .save()
    .then(baby => {
      res.json(baby, {"message": "Creation successful"});
    });
});

// ====================================
// === SHOW ALL BABY LOGS BY USER =====
// ====================================
/**
 * @api {get} /api/baby/babylog Request All User Babylogs
 * @apiName GETALLUserBabylogs
 * @apiGroup Babylog
 *
 * @apiParam {String} Payload id_Token UserId from Auth0.
 * 
 * @apiSuccess {Array} log Array of Babylogs that User has Submited.
 */
router.get("/babylog", checkJwt, (req, res) => {
  model.newbornfoodlog
    .findAll({
      where: {
        userId: req.user.sub
      }
    })
    .then(logs => {
      res.json(logs);
    });
});

// ====================================
// == SHOW SPECIFIC BABY LOG BY USER ==
// ====================================
/**
 * @api {get} /api/baby/babylog/:id Request Specific User Babylog
 * @apiName GETSpecificUserBabylog
 * @apiGroup Babylog
 *
 * @apiParam {String} Payload id_Token UserId from Auth0.
 * @apiParam {Number} id The Babylog id in URL. 
 * 
 * @apiSuccess {String} name Specific name that Baby.
 * @apiSuccess {String} diaperchange Diaperchanghe Status.
 * @apiSuccess {Time} sleep How long did the Baby Sleep?
 * @apiSuccess {Number} bottle Ounces.
 * @apiSuccess {Time} breastfed How long did they eat?
 * @apiSuccess {String} notes Any notes from Baby log
 */
router.get("/babylog/:id", checkJwt, (req, res) => {
  models.newbornfoodlog.findById(req.params.id).then(logId => {
    res.json(logId);
  });
});

// ====================================
// === CREATE A LOG FOR A BABY ========
// ====================================
/**
 * @api {Post} /api/baby/babylog Create A New User Babylog
 * @apiName POSTNewUserBabylog
 * @apiGroup Babylog
 *
 * @apiParam {String} Payload id_Token UserId from Auth0.
 * @apiParam {Number} id The Babylog id in URL. 
 * 
 * @apiSuccess {String} name Specific name that Baby.
 * @apiSuccess {String} diaperchange Diaperchanghe Status.
 * @apiSuccess {Time} sleep How long did the Baby Sleep?
 * @apiSuccess {Number} bottle Ounces.
 * @apiSuccess {Time} breastfed How long did they eat?
 * @apiSuccess {String} notes Any notes from Baby log
 * @apiSuccess {Array} Empty Emptry Array
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Creation successful"
 *     }
 */
router.post("/babylog", checkJwt, (req, res) => {
  const babyLog = models.newbornfoodlog
    .build({
      userID: req.user.sub,
      name: req.body.name,
      diaperchange: req.body.diaperchange,
      sleep: req.body.sleep,
      bottle: req.body.bottle,
      breastfed: req.body.breastfed,
      notes: req.body.notes
    })
    .save()
    .then(babyLog => {
      res.json(babyLog, {"message": "Creation successful"});
    });
});

module.exports = router;
