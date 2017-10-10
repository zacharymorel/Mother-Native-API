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
// ==== CREAT A NEW BABY ==============
// ====================================
router.post("/", checkJwt, (req, res) => {
  console.log("this user is ", req.user.sub);
  const baby = models.babyId
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
// ===== SHOW ALL BABY LOG BY USER ====
// ====================================


module.exports = router;
