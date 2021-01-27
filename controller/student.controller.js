const services = require('../services/students.service.js')
const validations = require('./validations.controller.js')

async function getStudents(){
    const data = await services.getStudents()
    return data
}

async function getStudent(id){
    const data = await services.getStudent(id)
    return data
}

async function postStundent(body){
    let isOk= false
    let ok =  validate(body)
    if(ok){
        isOk = true
        await services.postStudent(body)
    }
    return isOk
}

async function updateStudent(id, body){
    let isOk= false
    let ok =  validate(body)
    if(ok){
        isOk = true
        await services.updateStudent(id,body)
    }
    return isOk
}

async function deleteStudent (id) {
    const data = await services.deleteStudent(id)
    return data
}

function validate(body){
    let ok = false
    if(body && typeof body === 'object' && Object.keys(body).length > 0){
        if(body.hasOwnProperty('name')&&body.hasOwnProperty('phone')&&body.hasOwnProperty('gender')){            
            if(validations.validateName(body.name) && validations.validatePhone(body.phone) && validations.validateGender(body.gender)){
                ok = true
                console.log("Successful");
            }
        }
    }
    return ok
}

module.exports = {
    getStudents,
    getStudent,
    postStundent,
    updateStudent,
    deleteStudent
}