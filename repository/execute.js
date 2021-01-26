const { get } = require('../routes/students.route')
const { getConnection } = require('./connection/connection')

async function execute (sql){
    return await getConnection().execute(sql)
}

module.exports = {
    execute
}