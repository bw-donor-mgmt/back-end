const validateUser = user => {
    let errors = [];
    
    if (!user.password || user.password.length < 4) {
        errors.push('Please include a password with at least 4 characters ')
    }

    return {
        isSuccessful: errors.length > 0 ? false : true, 
        errors
    }
}

module.exports = {
    validateUser
}