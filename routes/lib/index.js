const {checkIsEmpty}= require("./shared/checkIsEmpty");
const {checkIsUndefined}= require("./shared/checkIsUndefined");
const {checkJwt} = require("./shared/checkJwt");
const {validateCreateData}= require('./auth/validateCreateData');
const {validateUpdateData}= require('./auth/validateUpdateData');
const {validateTodoData}= require('./auth/validateTodoData');
const {validateLoginData}= require('./auth/validateUpdateData');

module.exports = {
    checkIsEmpty,
    checkIsUndefined,
    checkJwt,
    validateCreateData,
    validateUpdateData,
    validateTodoData,
    validateLoginData,
};