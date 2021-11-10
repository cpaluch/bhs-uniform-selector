const { v4: uuid_v4 } = require('uuid');

module.exports = {
    getAllUniforms,
    updateUniforms
}

let Uniforms = [

  {
    id: uuid_v4(),
    uniform_id: "Gaunlet 1",
    student_id: "",
    piece: "Gauntlet",
    type: "Marching",
    height: "",
    chest: "",
    waist: "",
    head: "",
    jacket_length: ""
  },
  {
    id: uuid_v4(),
    uniform_id: "Jacket 1",
    student_id: "",
    piece: "Jacket",
    type: "MS Concert",
    height: "",
    chest: 34,
    waist: "",
    head: "",
    jacket_length: "long"
  },
  {
    id: uuid_v4(),
    uniform_id: "Jacket 2",
    student_id: "",
    piece: "Jacket",
    type: "HS Concert",
    height: "",
    chest: 30,
    waist: "",
    head: "",
    jacket_length: "medium"
  },
  {
    id: uuid_v4(),
    uniform_id: "Jacket 3",
    student_id: "",
    piece: "Jacket",
    type: "HS Concert",
    height: "",
    chest: 26,
    waist: "",
    head: "",
    jacket_length: "short"
  },
  {
    id: uuid_v4(),
    uniform_id: "Pants 1",
    student_id: "",
    piece: "Pants",
    type: "Marching",
    height: "",
    chest: "",
    waist: "34",
    head: "",
    jacket_length: ""
  },
  {
    id: uuid_v4(),
    uniform_id: "Pants 2",
    student_id: "",
    piece: "Pants",
    type: "MS Concert",
    height: "",
    chest: "",
    waist: "30",
    head: "",
    jacket_length: ""
  }
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