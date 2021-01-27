const id = require('../services/students.service.js')

async function idValidation(req, res, next){
    let { params } = req
    const data = await id.getId(params.id)
    if(data[0].length < 1){
        console.log("The id student doesnt exist");
        return res.status(200).send({
            msg:'ID not found'
        })
    } next()
}

module.exports = idValidation