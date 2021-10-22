var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/allUniforms', function(req, res, next) {
  let temp_uniform_list = [
    {"type":"gauntlet", "uniformId":1, "size":"S"},
    {"type":"hat", "uniformId":2, "size":"M"}
  ];

  res.send(temp_uniform_list);

})

router.get('/allStudents', function(req, res, next) {
  let temp_student_list = [
    {
      "first_name" : "John",
      "last_name" : "Doe",
      "student_id" : 10
    },
    {
      "first_name" : "Jane",
      "last_name" : "Doe",
      "student_id" : 11
    }
  ]

  res.send(temp_student_list)
})

router.post('/assignUniforms', function(req, res, next) {
  
})

module.exports = router;
