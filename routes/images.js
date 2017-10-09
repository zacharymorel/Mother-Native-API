var express = require('express')
var router = express.Router()
var models = require('../models')


// ==========================
// ==== IMAGE UPLOAD ========
// ==========================


// ==========================
// ==== BABY IMAGE UPLOAD ===
// ==========================   // On to upload an image with node for React 
router.post('/upload', (req, res) => {
    cloudinary.uploader.upload(req.body.files, function(result) { 
        console.log(result.secure_url)
        // .then post DB        ^^^
      });
})

router.get('/test' , (req, res) => {
    res.json({message: 'testing 101'})
})



module.exports = router