const mysql = require('mysql2/promise')
function connetion(){
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DB,
        password: process.env.DB_PASSWORD
    });
}

function getConnection(){
    return connetion()
}

module.exports = {
    connetion,
    getConnection
}