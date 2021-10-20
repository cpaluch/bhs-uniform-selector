const express = require('express')
const router = express.Router()
const uniformController = require('../controllers/uniforms.controller');

router.get('/getUniforms', uniformController.getAllUniforms)
router.post('/updateUniform', uniformController.updateUniforms)

module.exports = router