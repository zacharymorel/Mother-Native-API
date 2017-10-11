var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
    res.render('../public/apidoc/index.html');
 });


module.exports = router;
