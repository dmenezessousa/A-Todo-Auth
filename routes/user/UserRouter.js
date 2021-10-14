const express = require('express');
const router = express.Router();

//from user controller
const {
    userSignUp,
    userLogin,
} = require('./controller/userController');

//from lib folder
const {
    checkIsEmpty,
    checkIsUndefined,
    validateCreateData,
    validateLoginData,
    // validateUpdateData,
    // validateTodoData,
    // checkJwt,
} = require('../lib/auth');

router.post("/create-user",
    validateCreateData,
    checkIsEmpty,
    checkIsUndefined,
    userSignUp,
);

router.put("/login",
    validateLoginData,
    checkIsEmpty,
    checkIsUndefined,
    userLogin,
);


module.exports = router;