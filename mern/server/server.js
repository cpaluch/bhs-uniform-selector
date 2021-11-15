const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(require("./routes/uniform"));
app.use(require("./routes/student"));
app.use(require("./routes/user"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});