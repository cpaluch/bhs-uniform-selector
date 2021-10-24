const { v4: uuid_v4 } = require('uuid');

module.exports = {
    getAllStudents,
    addStudent
}

//Mock array
let Students = [
    {
      "first_name" : "John",
      "last_name" : "Doe",
      "student_id" : uuid_v4()
    },
    {
      "first_name" : "Jane",
      "last_name" : "Doe",
      "student_id" : uuid_v4()
    }
  ]

async function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (Students.length>0) {
            setTimeout(()=>{
                resolve(Students);
            },10);
        }
        else
            reject(false);
    });
}

//param: body is in the form of { "first_name" : string, "last_name" : string } unique id is generated
async function addStudent(body) {

  const first_name = body.first_name
  const last_name = body.last_name


  let new_student = {
    "first_name" : first_name,
    "last_name" : last_name,
    "student_id" : uuid_v4()
  }

  

  return new Promise((resolve, reject) => {

    Students.push(new_student)

    setTimeout(() => {
      resolve(new_student);
    }, 10);
  })
  

}