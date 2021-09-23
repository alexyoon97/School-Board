const pool = require("../db");
const fs = require("fs");
const util = require("util");
const { uploadFile, getFileStream } = require("../utils/s3");
const asyncHandler = require("express-async-handler");

const unlinkFile = util.promisify(fs.unlink);

exports.createSchool = asyncHandler(async (req, res, next) => {
  try {
    const { name, about, location, admission, imageKey } = req.body;
    const newSchool = await pool.query(
      "INSERT INTO school (name, about, location, admission, image_key) VALUES ($1, $2, $3, $4, $5)",
      [name, about, location, admission, imageKey]
    );
  } catch (err) {
    console.log(err.message);
  }
});
exports.getSchool = asyncHandler(async (req, res, next) => {
  try {
    const schools = await pool.query("SELECT * FROM school");
    res.json(schools.rows);
  } catch (err) {
    console.log(err.message);
  }
});

exports.findSchool = asyncHandler(async (req, res, next) => {
  const { school_uid } = req.params;
  try {
    const school = await pool.query(
      "SELECT * FROM school WHERE school_uid = $1",
      [school_uid]
    );
    res.json(school.rows);
  } catch (err) {
    console.log(err.message);
  }
});

exports.updateSchool = asyncHandler(async (req, res, next) => {
  const { name, about, location, admission, school_uid, imageKey } = req.body;
  try {
    const updateSchool = await pool.query(
      "UPDATE school SET name = $1, about = $2, location = $3, admission = $4, image_key = $5 WHERE school_uid = $6",
      [name, about, location, admission, imageKey, school_uid]
    );
    res.json("School information updated");
  } catch (err) {
    console.log(err);
  }
});

exports.getSchoolImage = asyncHandler(async (req, res) => {
  const { key } = req.params;
  try {
    const readStream = getFileStream(key);
    readStream.pipe(res);
  } catch (err) {
    console.log(err);
  }
});

exports.uploadSchoolImage = asyncHandler(async (req, res) => {
  try {
    const file = req.file;
    const result = await uploadFile(file);
    await unlinkFile(file.path);
    res.send({ imageKey: result.Key });
  } catch (err) {
    console.log(err);
  }
});
