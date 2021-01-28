const app = require('../index.js')
const supertest = require('supertest')

describe(`POST Student`, () =>{
    test(`Should add a student`,async (done)=> {
        supertest(app).post('/v1/students/').send({
            "name":"Student Test",
            "gender":"F",
            "phone":"9999059183",
            "address":"Student address test",
            "age":21
        }).then(response=>{
            expect(response.statusCode).toBe(201)
            done()
        })
    })        
 })
