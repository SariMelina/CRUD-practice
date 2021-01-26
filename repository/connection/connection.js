const mysql = require('mysql2/promise')
let con = null
async function connetion(){
    con = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DB,
        password: process.env.DB_PASSWORD
    });
    return con
}

function getConnection(){
    return con
}

module.exports = {
    connetion,
    getConnection
}