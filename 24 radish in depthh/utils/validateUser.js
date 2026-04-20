const validator = require("validator");

function validateUser(val) {
    const mandatoryField = ["FirstName", "age", "emailId", "password"];

    const data = Object.keys(val);

    const isAllowed = mandatoryField.every(key => data.includes(key));
    if (!isAllowed) {
        throw new Error("Field Missing");
    }
    if (!validator.isEmail(val.emailId)) {
        throw new Error("Invalid Error");
    }
    if (!validator.isStrongPassword(val.password)) {
        throw new Error("Weak password");
    }
    if (!(val.FirstName.length > 3 && val.FirstName.length < 20)) {
        throw new Error("Name should be greater then 3 and less then 20 charcter");
    }
}
module.exports = validateUser;