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
router.get("/:id", checkJwt, (req, res) => {
  models.BabyTable.findById(req.params.id).then(babyId => {
    res.json(babyId);
  });
});

// ====================================
// ====== EDIT SPECIFIC BABY ==========
// ====================================
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
      res.json(baby);
    });
});

// ====================================
// === SHOW ALL BABY LOGS BY USER =====
// ====================================
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
router.get("/babylog/:id", checkJwt, (req, res) => {
  models.newbornfoodlog.findById(req.params.id).then(logId => {
    res.json(logId);
  });
});

// ====================================
// === CREATE A LOG FOR A BABY ========
// ====================================
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
      res.json(babyLog);
    });
});

module.exports = router;
