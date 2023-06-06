const express = require("express");
const router = express.Router();

//multer
const multer = require("multer");
const storage = require("../../util/multer");
const upload = multer({
  storage,
});

const checkAccessWithSecretKey = require("../../checkAccess");

const hostRequestFile = require("./request.controller");

//Get All Request
router.get(
  "/newRequest",
  checkAccessWithSecretKey(),
  hostRequestFile.requestGet
);

//Create Request
router.post(
  "/newRequest",
  checkAccessWithSecretKey(),
  upload.single("image"),
  hostRequestFile.requestStore
);

//Update Request
router.patch(
  "/:requestId",
  checkAccessWithSecretKey(),
  upload.single("image"),
  hostRequestFile.requestUpdate
);

//Accept Request
router.put(
  "/:requestId",
  checkAccessWithSecretKey(),
  upload.single("image"),
  hostRequestFile.requestAccept
);

module.exports = router;
