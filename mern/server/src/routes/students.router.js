const express = require('express')
const router = express.Router()

const studentController = require('../controllers/students.controller');

router.get('/allStudents', studentController.getAllStudents)
//router.post('/addStudent', studentController.addOneStudent)


module.exports = router;