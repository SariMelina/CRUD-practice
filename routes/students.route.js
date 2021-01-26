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

module.exports = student;