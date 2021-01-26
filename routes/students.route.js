const express = require('express')
const student = express.Router()
const ctrStundents = require('../controller/student.controller.js')

student.get('/',async(req, res)=> {
    const data = await ctrStundents.getStudents()
    return res.status(200).send({
        status:200,
        msg: "Success",
        data: data
    })
});

student.post('/', async (req, res) => {
    let { body } = req
    let status = 201
    let ok = await ctrStundents.postStundent(body)
    let msg = 'New student added'
    if(ok === false) {
        status= 401,
        msg= 'Some data invalid'
    }
    return res.status(status).send({
        status:status,
        msg: msg
    })
})

module.exports = student;