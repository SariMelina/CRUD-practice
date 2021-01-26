const services = require('../services/students.service.js')

async function getStudents(){
    const data = await services.getStudents()
    return data
}

module.exports = {
    getStudents
}