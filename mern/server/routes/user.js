const express = require("express");
const jwt = require("jsonwebtoken");

const userRoutes = express.Router();

const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Register a single user
userRoutes.route("/user/register").post(function (req, res) {

  // TODO: Validate request here

  // Extract email and password
  const email = req.body.email;
  const password = req.body.password;

  // Check if user already exists
  let db_connect = dbo.getDb();

  db_connect
    .collection("users")
    .findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        // TODO: Hash password w/ bcrypt before storing it in db
        const newUser = {
          email : email,
          password: password
        };
        db_connect
          .collection("users")
          .insertOne(newUser, function (err, response) {
            if (err) throw err;
            res.json(response);
          })
      }
    })
})

// Login a user
userRoutes.route("/user/login").post(function (req, res) {

  // TODO: Validate request here

  // Extract email and password
  const email = req.body.email;
  const password = req.body.password;

  let db_connect = dbo.getDb();

  db_connect
    .collection("users")
    .findOne({ email })
    .then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      // Check password
      // TODO: Hash this password with bcrypt
      if (password == user.password) {
        const payload = {
          id: user._id
        }
        // Sign token
        jwt.sign(
          payload,
          // TODO: Move this to file with mongo URI
          "secret here",
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    })
})

module.exports = userRoutes;