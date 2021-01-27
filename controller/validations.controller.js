function validateName (name) {
    let ok = false
    if(name !== '' && name.length > 0){
        ok = true
    }else{
        console.log("Error with the name");
    }
    return ok
}

function validatePhone (data) {
    let ok = false
    if(data !== '' && data.length === 10){
        ok = true
    }else{
        console.log("Error with the phone");
    }
    return ok
}

function validateGender (data) {
    let ok = false
    if(data !== '' && data.length === 1 && (data === 'F' || data === 'M')){
        ok = true
    }else{
        console.log("Error with the gender");
    }
    return ok
}

module.exports = {
    validateGender,
    validateName,
    validatePhone
}