const validator = require('validator');

const isEmail = (email) => {
    return validator.isEmail(email);
};

const isLength = (input, options) => {
    return validator.isLength(input, options);
};

module.exports = {
    isEmail,
    isLength
}