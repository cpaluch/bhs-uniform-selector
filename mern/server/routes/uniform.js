const express = require("express");

const uniformRoutes = express.Router();

const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Get all uniforms
uniformRoutes.route("/uniform").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("uniforms")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result)
    });
});

// Add a single uniform
uniformRoutes.route("/uniform/add").post(function (req, res) {
  let db_connect = dbo.getDb();
  let obj = {
    uniform_id: req.body.uniform_id,
    student_id : req.body.student_id,
    piece: req.body.piece,
    type: req.body.type,
    height: req.body.height,
    chest : req.body.chest,
    waist : req.body.waist,
    head : req.body.head,
    jacket_length : req.body.jacket_length
  };
  db_connect
    .collection("uniforms")
    .insertOne(obj, function (err, response) {
      if (err) throw err;
      res.json(response);
    })
})

// Assign one or more uniforms to a single student
uniformRoutes.route("/uniform/assign").post(function (req, res) {
  let db_connect = dbo.getDb();
  const query = { _id : { $in : req.body.uniform_ids.map(id => ObjectId(id)) } }
  const update = { $set : {student_id : req.body.student_id } }
  db_connect
    .collection("uniforms")
    .updateMany(query, update, function (err, response) {
      if (err) throw err;
      res.json(response);
    })
});

// Unassign one or more uniforms
uniformRoutes.route("/uniform/unassign").post(function (req, res) {
  let db_connect = dbo.getDb();
  const query = { _id : { $in : req.body.uniform_ids.map(id => ObjectId(id)) } }
  const update = { $set : {student_id : "" } }
  db_connect
    .collection("uniforms")
    .updateMany(query, update, function (err, response) {
      if (err) throw err;
      res.json(response);
    })
});

module.exports = uniformRoutes;