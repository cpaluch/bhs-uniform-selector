

module.exports = {
    getAllStudents
}

//Mock array
let Students = [
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