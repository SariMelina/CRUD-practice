const { getConnection } = require('./connection/connection')

 function execute (sql){
    return getConnection().execute(sql)
}

module.exports = {
    execute
}