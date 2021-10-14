const Todo = require("../model/Todo");
const User = require("../../user/model/User");
const errorHandler = require('../../utils/errorHandler/errorHandler');

async function getTodo(req,res){
    let foundTodos = await Todo.find({});
    res.json({message: "Success", payload: foundTodos});
};

async function newTodo (req,res){
    const {todo} = req.body;

    try{
        const decodedData = res.locals.decodedData;

        //match the user based on its email
        let foundUser = await User.findOne({email: decodedData.email});

        //create a todoList Obj
        const createTodo = new Todo({
            todo,
            todoOwner: foundUser._id//show user ID
        });

        //save the new List
        let saveTodo = await createTodo.save();
        //push the new todo to the user todoList
        foundUser.todoList.push(saveTodo._id);
        //saves all the information + the new Todo list in that user
        await foundUser.save();
        //return the todo made by the user
        return res.json({message: "Success", saveTodo});
    }catch(e){
        res.status(500).json({message:"Failure", error: e.message});
    }
};

async function updateTodo(req, res){
    try{
        let todos = await Todo.findById(req.params.id);
        if(!todos){
            res.status(404).json({message: "Error", error: "Todo not found"});
        }else{
            let updatedTodo = await Todo.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                {new: true});

                res.json({
                message: "Todo updated",
                payload: updatedTodo,
            });
        }
    }catch(e){
        res.status(500).json({
            message: "Error",
            Error: e.message,
        });
    }
};

async function deleteTodo(req,res){
    try{
        let deletedTodo = await Todo.findByIdAndRemove(req.params.id);

        if(!deletedTodo){
            return res.status(404).json({message: "Error", error: "Todo not found"});
        }else{
            const decodedData = res.locals.decodedData;

        let foundUser = await User.findOne({email: decodedData.email});

        let userTodos = foundUser.orderHistory;

        let userTodoHistory = userTodos.filter(
            (item) => item._id.toString() !== req.params.id
        );

        foundUser.todoList = userTodoHistory;

        await foundUser.save();

        res.json({message: "Deleted", payload: deletedTodo});
        }

    }catch(e){
        res.status(500).json({message:"Failure", error: e.message});
    }
};

module.exports = {
    getTodo,
    newTodo,
    updateTodo,
    deleteTodo,
};

