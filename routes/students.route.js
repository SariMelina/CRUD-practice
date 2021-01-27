const express = require('express')
const student = express.Router()
const ctrStundents = require('../controller/student.controller.js')
const validate = require('../middleware/idValidation.middle.js')

student.get('/',async(req, res)=> {
    const data = await ctrStundents.getStudents()
    return res.status(200).send({
        status:200,
        msg: "Success",
        data: data[0]  
    })
});

student.get('/:id',validate, async(req,res)=> {
    const data = await ctrStundents.getStudent(req.params.id)
    return res.status(200).send({
        status:200,
        msg:"Success",
        data: data[0]
    })
    
})

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

student.put('/:id',validate, async (req, res)=>{
    let { body, params } = req
    let status = 201
    let ok = await ctrStundents.updateStudent(params.id, body)
    let msg = 'Success update'
    if(ok === false) {
        status= 401,
        msg= 'Some data invalid'
    }
    return res.status(status).send({
        status:status,
        msg: msg
    })
})

student.delete('/:id',validate, async(req, res)=> {
    let { params } = req
    let status = 200
    let ok = await ctrStundents.deleteStudent(params.id)
    console.log(ok);
    let msg = 'Student deleted '
    if(ok === false){
        status = 400
        msg = 'Error'
    }
    return res.status(status).send({
        status:status,
        msg:msg
    })
})

module.exports = student;