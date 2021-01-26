const exec = require('../repository/execute.js')

async function getStudents() {
    const data = await exec.execute(`SELECT * FROM students`)
    return data
}

async function postStudent(body) {
    const data = await exec.execute(`INSERT INTO students VALUES (default, '${body.name}','${body.gender}','${body.phone}','${body.address}', ${body.age})`)    
    return data
}

module.exports = {
    getStudents,
    postStudent
}