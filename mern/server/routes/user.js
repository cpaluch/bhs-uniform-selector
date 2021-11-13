const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "./config.env" });

const userRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

// Register a single user
userRoutes.route("/user/register").post(function (req, res) {

  // TODO: Validate request here

  // Extract email and password
  const email = req.body.email;
  const password = req.body.password;

  let db_connect = dbo.getDb();

  db_connect
    .collection("users")
    .findOne({ email : email })
    .then(user => {
      // Check if user already exists
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        // Encrypt password and send to MongoDB
        const salt = bcrypt.genSaltSync(10);
        const encrypted_password = bcrypt.hashSync(password, salt);
        const newUser = {
          email: email,
          password: encrypted_password
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
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user._id
          }
          // Sign token
          jwt.sign(
            payload,
            process.env.SECRET_OR_KEY,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
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
})

module.exports = userRoutes;