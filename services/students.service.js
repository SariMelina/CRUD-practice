const exec = require('../repository/execute.js')

async function getStudents() {
    const data = exec.execute(`SELECT * FROM students`)
    return data
}

module.exports = {
    getStudents
}