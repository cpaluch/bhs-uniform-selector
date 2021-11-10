const userService = require('../services/users.service.js')

module.exports = {
    authenticate
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
    .then(() => res.json({}))
    .catch(err => next.err);
}