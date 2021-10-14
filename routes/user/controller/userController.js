const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const errorHandler = require('../../utils/errorHandler/errorHandler');

//Create a new User or sign up
async function userSignUp (req, res){
    const {firstName, lastName, userName, email, password} = req.body;

    try{
        let salt = await bcrypt.genSalt(10);
        let hashed = await bcrypt.hash(password,salt);

        const createdUser = new User({
            firstName,
            lastName,
            userName,
            email,
            password: hashed,
        });

        let savedUser = await createdUser.save();
        res.json({message: "success", payload: savedUser});
    }catch(e){
        res
        .status(500)
        .json({
            message: "Error",
            error: errorHandler(e);
        })
    }
};

async function userLogin (req, res){

}

async function userUpdate (req, res){

}

module.exports = {
    userSignUp,
    userLogin,
    userUpdate,
};