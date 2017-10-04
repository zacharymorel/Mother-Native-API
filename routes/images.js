var express = require(express)
var router = express.Router()

// ==========================
// ==== BABY IMAGE UPLOAD ===
// ==========================   // On to upload an image with node for React 
router.post('/upload', (req, res) => {
    cloudinary.uploader.upload(req.body.files, function(result) { 
        console.log(result.secure_url)
        // .then post DB        ^^^
      });
})




module.exports = Router