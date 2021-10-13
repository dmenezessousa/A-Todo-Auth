function paserdErrorMessagge(err){
    let output;

    try{
        let objectKeys = Object.keys(err.keyPattern);
        let objectValue = Object.keys(err.keyValue);

        output = `${objectKeys[0]} ${objectValue} already exists`
    }catch(e){
        output = "Something went wrong"
    }
    return output;
}

function errorHandler(err){
    let message = "";

    if(err.code){
        switch(err.code){
            case 11000:
            case 11001:
                message = paserdErrorMessagge(err);
                break;
            default:
                message = "Something went wrong please contact support";                
        }
    }else if(err.message){
        return err.message;
    }
    return message;
}

module.exports = {
    errorHandler,
}