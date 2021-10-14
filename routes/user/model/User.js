const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    userName: {type: String, unique:true},
    email:{type:String, unique: true},
    password: {type:String},
    todoList:[{type: mongoose.Schema.ObjectId, ref:"todo"}],
    timeCreated:{type:Date,default:Date.now},
},
{
    timestamps: true,
});

module.exports = mongoose.model("user", userSchema);