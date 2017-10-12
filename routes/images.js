var express = require("express");
var router = express.Router();
const cloudinary = require("cloudinary");
const path = require("path");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const async = require("async");
var models = require("../models");
let keys = {}

if (process.env.NODE_ENV !== "production"){
    keys = require("../config");
}
router.use(fileUpload());

cloudinary.config({
  cloud_name: process.env.COULDIYFA_CLOUD_NAME || keys.COULDIYFA_CLOUD_NAME,
  api_key: process.env.COULDIYFA_API_KEY || keys.COULDIYFA_API_KEY,
  api_secret: process.env.CLOUDIFYA_API_SECRET || keys.CLOUDIFYA_API_SECRET
});

// ==========================
// == IMAGE UPLOAD ROTUES ===
// ==========================

const genGuid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

// ======================================
// ==== UPLOAD A PICTURE ================
// ======================================
router.post("/upload", (req, res) => {
  const _filePath =
    __dirname + "/uploads/" + genGuid() + "_" + req.files.image.name;
  let secure_url = "";
  // add the file to server to a temp folder -- so we can get a file path
  const saveFile = next => {
    console.log("saving to ", _filePath);
    req.files.image.mv(_filePath, err => {
      console.log("saved file", "err:", err);
      next();
    });
  };

  // upload the file with that new path
  const uploadToStorage = next => {
    cloudinary.uploader.upload(_filePath, result => {
      console.log("uploaded", result);
      secure_url = result.secure_url;
      next();
    });
  };

  // delete the file from the temp folder after we have confirmed the upload
  const deleteFile = next => {
    fs.unlink(_filePath, err => {
      console.log("deleted file", "err =>", err);
      next();
    });
  };

  // TODO: save secure_url to database
  const saveToDatabase = next => {
    const url = models.Images.build({
        userId: req.user.sub,
        images: req.secure_url 
    })
    console.log("saving to databse", secure_url)    
    .save()
    .then(url => {
        next();
    })    
  };

  const tasks = [saveFile, uploadToStorage, deleteFile, saveToDatabase];

  async.waterfall(tasks, err => {
    console.log("complete", "error was", err);
    res.json(err);
  });
});

router.get("/", (req, res) => {
    res.json({"hellow":"world"})
})
// ======================================
// ======= SHOW IMAGE FOR USER ==========
// ======================================

module.exports = router;
