const { isAlpha,isInt} = require("validator");

function validateTodo (req,res,next){
    const {
        todo,
    }= req.body;

        let errObj = {};

        //check if ordername is a String
        if(!isAlpha(todo)){
            errObj.orderName = "Alphabet ONLY!";
        }
        
        
        //check if any field is empty
        if(Object.keys(errObj).length > 0){
            return res.status(500).json({
                message: "error", 
                error: errObj,
            });
        }else{
            next();
        }
}

module.exports = {
    validateTodo,
}