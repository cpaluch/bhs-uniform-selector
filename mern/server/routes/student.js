const express = require("express");

const studentRoutes = express.Router();

const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Get all students
studentRoutes.route("/student").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("students")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result)
    });
});

// Add a single student
studentRoutes.route("/student/add").post(function (req, res) {
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
})

module.exports = studentRoutes;