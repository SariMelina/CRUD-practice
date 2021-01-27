const exec = require('../repository/execute.js')

async function getStudents() {
    const data = await exec.execute(`SELECT * FROM students`)
    return data
}

async function getStudent(id){
    const data = await exec.execute(`SELECT * FROM students WHERE id = ${id}`)
    return data
}

async function postStudent(body) {
    const data = await exec.execute(`INSERT INTO students VALUES (default, '${body.name}','${body.gender}','${body.phone}','${body.address}', ${body.age})`)    
    return data
}

async function updateStudent(id, body){
    const data = await exec.execute(`UPDATE students SET name='${body.name}',gender='${body.gender}',phone='${body.phone}',address='${body.address}',age= ${body.age} WHERE id=${id}`)
    return data
}

async function deleteStudent(id){
    const data = await exec.execute(`DELETE FROM students WHERE id=${id}`)
    return data
}

module.exports = {
    getStudents,
    getStudent,
    postStudent,
    updateStudent,
    deleteStudent
}