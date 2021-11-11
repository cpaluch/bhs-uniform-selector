const express = require("express");

const userRoutes = express.Router();

const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Add a single user
userRoutes.route("/user/add").post(function (req, res) {
  let db_connect = dbo.getDb();
  let obj = {
    email: req.body.email,
    password: req.body.password
  };
  db_connect
    .collection("users")
    .insertOne(obj, function (err, response) {
      if (err) throw err;
      res.json(response);
    })
})

// Authenticate a user
userRoutes.route("/user/authenticate").post(function (req, res) {
  let db_connect = dbo.getDb();
  let query = {
    email: req.body.email,
    password: req.body.password
  };
  db_connect
    .collection("users")
    .findOne(query, function (err, response) {
      if (err) throw err;
      res.json(response);
    })
})

module.exports = userRoutes;