const uniformService = require('../services/uniforms.service')

module.exports = {
    getAllUniforms,
    updateUniforms
}

function getAllUniforms(req, res, next) {
    uniformService.getAllUniforms()
    .then(uniforms => {
        const gridUniforms = uniforms.map(uniform => {
            return {
                type : uniform.type,
                id : uniform.uniform_id,
                size : uniform.size,
                student_id : uniform.student_id
            };
        })
        return res.json(gridUniforms)
    })
    .catch(err => next(err));
}

function updateUniforms(req, res, next) {
    uniformService.updateUniforms(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}