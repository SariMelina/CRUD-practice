const exec = require('../repository/execute.js')

const getStudents = () => exec.execute(`SELECT * FROM students`)

const getStudent = (id) => exec.execute(`SELECT * FROM students WHERE id = ${id}`)

const postStudent = (body) => exec.execute(`INSERT INTO students VALUES (default, '${body.name}','${body.gender}','${body.phone}','${body.address}', ${body.age})`)    

const updateStudent = (id, body) => exec.execute(`UPDATE students SET name='${body.name}',gender='${body.gender}',phone='${body.phone}',address='${body.address}',age= ${body.age} WHERE id=${id}`)

const deleteStudent = (id) => exec.execute(`DELETE FROM students WHERE id=${id}`)

const getId = (id) => exec.execute(`SELECT * FROM students WHERE id=${id}`)

module.exports = {
    getStudents,
    getStudent,
    postStudent,
    updateStudent,
    deleteStudent,
    getId
}