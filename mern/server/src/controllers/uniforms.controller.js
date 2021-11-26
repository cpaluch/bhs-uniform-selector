const uniformService = require('../services/uniforms.service')

module.exports = {
    getAllUniforms,
    updateUniforms
}

function getAllUniforms(req, res, next) {
    uniformService.getAllUniforms()
    .then(uniforms => res.json(uniforms))
    .catch(err => next(err));
}

function updateUniforms(req, res, next) {
    uniformService.updateUniforms(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}