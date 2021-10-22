module.exports = {
    getAllUniforms,
    updateUniforms
}

let Uniforms = [
    {
        "type" : "Gaunlet",
        "uniform_id" : 10,
        "size" : "Small",
        "student_id" : 5
    },
    {
        "type" : "Hat",
        "uniform_id" : 11,
        "size" : "Medium",
        "student_id" : 11
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
            
            if (uniform_element.uniform_id === uniform_id) {
                uniform_element.student_id = uniforms.student_id
            }
        }
    })

    return Uniforms
}