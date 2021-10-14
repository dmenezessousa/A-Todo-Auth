const express = require('express');
const router = express.Router();

//Validators
const {
    checkJwt,
    checkIsEmpty,
} = require('../lib/auth');

//Controllers
const {
    getTodo,
    newTodo,
    updateTodo,
    deleteTodo,
} = require('./controller/todoController');


router.get("/",
    checkJwt,
    checkIsEmpty, 
    getTodo, 
);

router.post("/create-todo",
    checkJwt,
    checkIsEmpty,
    newTodo,
);

router.put("/update-todo/:id",
    checkJwt,
    checkIsEmpty,
    updateTodo,
);

router.delete("/delete-todo/:id",
    checkJwt,
    checkIsEmpty,
    deleteTodo,
);

module.exports = router;