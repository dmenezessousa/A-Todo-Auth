const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo:{type: String},
    done:Boolean,
    todoOwner:{type: mongoose.Schema.ObjectId, ref: "user"},
    date: {type: Date, default: Date.now},
},{timestamps : true,});



module.exports = mongoose.model("todo", todoSchema);