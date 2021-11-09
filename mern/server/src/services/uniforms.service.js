const { v4: uuid_v4 } = require('uuid');

module.exports = {
    getAllUniforms,
    updateUniforms
}

let Uniforms = [
    {
        "type" : "Gauntlet",
        "uniform_id" : 10,
        "size" : "Small",
        "student_id" : "",
        "id": uuid_v4()
    },
    {
        "type" : "Hat",
        "uniform_id" : 11,
        "student_id" : "",
        "size" : "Large",
        "id": uuid_v4()
    },
    {
        "type" : "Jacket",
        "uniform_id" : 12,
        "size" : "Small",
        "student_id" : "",
        "id": uuid_v4()
    },
    {
        "type" : "Jacket",
        "uniform_id" : 13,
        "student_id" : "",
        "size" : "Large",
        "id": uuid_v4()
    },
    {
        "type" : "Jacket",
        "uniform_id" : 14,
        "size" : "Medium",
        "student_id" : "",
        "id": uuid_v4()
    },
    {
        "type" : "Pants",
        "uniform_id" : 15,
        "student_id" : "",
        "size" : "Large",
        "id": uuid_v4()
    },
    {
        "type" : "Pants",
        "uniform_id" : 16,
        "size" : "Medium",
        "student_id" : "",
        "id": uuid_v4()
    },
    {
        "type" : "Gauntlet",
        "uniform_id" : 17,
        "student_id" : "",
        "size" : "Small",
        "id": uuid_v4()
    }
    /*
    {
      type: "Hat",
      id: uuid_v4(),  // Unique garment ID for backend
      bburg_id: 10,  // ID assigned by blacksburg school
      student_id: "18fdd53c-61a4-410e-b68c-b90bba4fe1b4",  // Unique student ID for backend
      size: {  // Sizing JSON that will differ for each garment type
        head: 20
      }
    },
    {
      type: "Pant",
      id: uuid_v4(),
      bburg_id: 11,
      student_id: "18fdd53c-61a4-410e-b68c-b90bba4fe1b4",
      size: {
        waist: 34
      }
    },
    {
      type: "Jacket",
      id: uuid_v4(),
      bburg_id: 12,
      student_id: "",
      size: {
        chest: 30,
        length: "medium"
      }
    }
    */
]
async function getAllUniforms() {
    return new Promise((resolve, reject) => {
        if (Uniforms.length > 0) {
            setTimeout(() => {
                resolve(Uniforms)
            }, 10)
        }
        else {
            reject(false)
        }
    });
}

//pre: uniforms is an object with list of updated uniforms as ID's and updated student ID
// uniforms = { "uniform_id" : number[], "student_id" : number }
async function updateUniforms(uniforms) {

    Uniforms.map((uniform_element) => {
        for (let index = 0; index < uniforms["uniform_id"].length; index++) {
            const uniform_id = uniforms.uniform_id[index];

            if (uniform_element.id === uniform_id) {
                uniform_element.student_id = uniforms.student_id
            }
        }
    })

    return Uniforms
}