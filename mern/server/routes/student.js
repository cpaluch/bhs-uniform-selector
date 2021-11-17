const express = require("express");
const passport = require("passport");
require('../passport')(passport)

const router = express.Router();

const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Get all students
router.get(
  "/student",
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    let db_connect = dbo.getDb();
    db_connect
      .collection("students")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result)
      });
  }
);

// Add a single student
router.post(
  "/student/add",
  passport.authenticate('jwt', { session : false }),
  function (req, res) {
    let db_connect = dbo.getDb();
    let obj = {
      f_name: req.body.f_name,
      l_name: req.body.l_name
    };
    db_connect
      .collection("students")
      .insertOne(obj, function (err, response) {
        if (err) throw err;
        res.json(response);
      })
  }
);

// Delete one or more students
router.post(
  "/student/delete",
  passport.authenticate('jwt', { session : false }),
  function (req, res) {
    let db_connect = dbo.getDb();
    const query = {_id : { $in : req.body.student_ids.map(id => ObjectId(id)) } }
    db_connect
      .collection("students")
      .deleteMany(query, function (err, response) {
        if (err) throw err;
        res.json(response);
      });
  }
);

module.exports = router;