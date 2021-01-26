const services = require('../services/students.service.js')

async function getStudents(){
    const data = await services.getStudents()
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

function validate(body){
    let ok = false
    if(body && typeof body === 'object' && Object.keys(body).length > 0){
        if(body.hasOwnProperty('name')&&body.hasOwnProperty('phone')&&body.hasOwnProperty('gender')){            
            if(validateName(body.name) && validatePhone(body.phone) && validateGender(data.gender)){
                ok = true
                console.log("Successful registration");
            }
        }
    }
    return ok
}

function validateName (name) {
    let ok = false
    if(name !== '' && name.length > 0){
        ok = true
    }else{
        console.log("Error with the name");
    }
    return ok
}

function validatePhone (data) {
    let ok = false
    if(data !== '' && data.length === 10){
        ok = true
    }else{
        console.log("Error with the phone");
    }
    return ok
}

function validateGender (data) {
    let ok = false
    if(data !== '' && data.length === 1 && (data === 'F' || data === 'M')){
        ok = true
    }else{
        console.log("Error with the gender");
    }
    return ok
}

module.exports = {
    getStudents,
    postStundent
}