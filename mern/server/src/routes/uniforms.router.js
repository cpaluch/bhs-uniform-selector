const express = require('express')
const router = express.Router()
const uniformController = require('../controllers/uniforms.controller');

router.get('/allUniforms', uniformController.getAllUniforms)
router.post('/updateUniforms', uniformController.updateUniforms)

module.exports = router