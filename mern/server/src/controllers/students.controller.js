const studentService = require('../services/students.service')

module.exports = {
    getAllStudents
}

function getAllStudents(req, res, next) {
    studentService.getAllStudents()
    .then(students => res.json(students))
    .catch(err => next(err));
}
