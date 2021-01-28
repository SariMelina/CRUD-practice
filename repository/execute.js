const { getConnection } = require('./connection/connection')

 async function execute (sql){
    try{
        return (await getConnection()).execute(sql)
    }catch(err){
        console.log(err);
    }
    
}

module.exports = {
    execute
}