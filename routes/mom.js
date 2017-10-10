var express = require("express");
var router = express.Router();
var models = require("../models");
var checkJwt = require("../middleware/jwt");

// ==================================
// ==== CONTRACTION AND MOM LOG =====
// ==================================

// ===================================
// === SPECIFIC USER CONTRACTION =====
// ===================================
router.get('/contraction/:id', checkJwt, (req, res) => {
  models.contractionTimerTable.findById(req.params.id).then(log => {
    res.json(log);
  });
});

// ===================================
// ==== CREATE A NEW LOG BUY USER ====
// ===================================
router.post('/contraction', checkJwt, (req, res) => {
  const log = models.contractionTimerTable
    .build({
      userId: req.user.sub,
      clocktimerstampstart: req.body.clocktimerstampstart,
      clocktimerstampstop: req.body.clocktimerstampstop
    })
    .save()
    .then(log => {
      res.json(log);
    });
});

// ===================================
// == SHOW ALL MOM LOGS BUY USER =====
// ===================================
router.get('/momlog', checkJwt, (req, res) => {
  model.momlog
    .findAll({
      where: {
        userId: req.user.sub
      }
    })
    .then(logs => {
      res.json(logs);
    });
});

// ===================================
// ==== SPECIFIC MOM LOG =============
// ===================================
router.get('/momlog/:id', checkJwt, (req, res) => {
  models.momlog.findById(req.params.id).then(log => {
    res.json(log)
  })
})

// ===================================
// ====== CREATE NEW MOM LOG ENTRY ===
// ===================================
router.post('/momlog', checkJwt, (req, res) => {
  const momLog = models.momlog.build({
    userId: req.user.sub,
    log: req.body.log
  })
  .save()
  .then(momLog => {
    res.json(momLog)
  })
})
 


module.exports = router;
