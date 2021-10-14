const {
    isAlpha,
    isAlphanumeric,
    isStrongPassword,
} = require("validator");

function validateUpdateData(req, res, next) {
    const { firstName, lastName, userName, password, confirmPassword } = req.body;

    let errObj = {};
    if (!isAlpha(firstName)) {
    errObj.firstName = "First Name cannot have special characters or numbers";
    }

    if (!isAlpha(lastName)) {
    errObj.lastName = "Last Name cannot have special characters or numbers";
    }

    if (!isAlphanumeric(userName)) {
    errObj.username = "Username cannot have special characters";
    }

    if (!isStrongPassword(password)) {
    errObj.password =
        "Your password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and at least 8 characters long";
    }

    if (password !== confirmPassword) {
    errObj.confirmPassword = "Password and confirm password must match";
    }

    if (Object.keys(errObj).length > 0) {
      //How would you validate firstName to make sure only alphabet is allowed
    return res.status(500).json({
        message: "Error",
        error: errObj,
    });
    } else {
    next();
    }
}

module.exports = {
    validateUpdateData,
};