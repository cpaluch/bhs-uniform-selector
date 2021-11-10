var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/authenticateUser', usersController.authenticate)

module.exports = router;
