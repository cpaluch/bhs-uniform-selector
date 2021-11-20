const studentService = require('../services/students.service')

module.exports = {
    getAllStudents,
    addStudent
}

function getAllStudents(req, res, next) {
    studentService.getAllStudents()
    .then(students => res.json(students))
    .catch(err => next(err));
}

function addStudent(req, res, next) {
    studentService.addStudent(req.body)
    .then(student => res.json(student))
    .catch(err => next(err));
}
