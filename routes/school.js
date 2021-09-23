const express = require("express");
const {
  createSchool,
  getSchool,
  findSchool,
  updateSchool,
  uploadSchoolImage,
  getSchoolImage,
} = require("../controllers/school");
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


router.route("/createSchool").post(createSchool);
router.route("/updateSchool").put(updateSchool);
router.route("/getSchool").get(getSchool);
router.route("/findSchool/:school_uid").get(findSchool);

router.route("/uploadSchoolImage").post(upload.single("image"), uploadSchoolImage);
router.route("/getSchoolImage/:key").get(getSchoolImage);

module.exports = router;
