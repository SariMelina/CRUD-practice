const express = require('express')
const app = express()
require('dotenv').config()
const students = require('./routes/students.route.js')
const conec = require('./repository/connection/connection.js')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/v1/students', students)

conec.connetion().then(msg => {
    app.listen(process.env.PORT, ()=> {
        console.log("Success connection");
        console.log(`Server start in port: ${process.env.PORT}`);
    })
}).catch(err => {
    console.log("Problem with the connection");
})