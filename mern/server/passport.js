const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const ObjectId = require("mongodb").ObjectId;
const dbo = require("./db/conn");
require("dotenv").config({ path: "./config.env" });

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_OR_KEY;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      let db_connect = dbo.getDb();
      db_connect
        .collection("users")
        .findOne({ _id : ObjectId(jwt_payload._id)})
        .then(user => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch(err => console.log(err));
    })
  );
};