const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// here we apply the validatio to the schema for the user which follow the constrant 

// the validation on the schema is called as the api level validatio 
// we need to validate the data on the api level validation because we ensure that the data is good or
// we do the api level validation because we neet to minimize the unwanted datavase call 
const userSchema = new mongoose.Schema(
    {
        FirstName: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 20
        },
        lastName: {
            type: String,
            minLength: 3,
            maxLength: 20
        },
        age: {
            type: Number,
            min: 14,
            max: 70,
            required: true
        },
        gender: {
            type: String,
            // enum: ["male", "female", "other"]
            validate(value) {
                if (!["Male", "Female", "Other" ,"male" , "female" ,"other"].includes(value))
                    throw new Error("Invalid Gender");
            }
        },
        emailId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            immutable: true
        },
        password: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            default: "This is a default photo"
        }
    }, { timestamps: true }
);

userSchema.methods.getJWT = function () {
     return jwt.sign({ _id: this._id, emailId: this.emailId }, process.env.SECRET_KEY, { expiresIn: "1d" });
};
userSchema.methods.validUser =async function(pass){
    return await bcrypt.compare(pass, this.password);
}
// model kya hai the meaning of making the model means making the Collection or table 
// now we can create the instance of the this 
const User = mongoose.model("user", userSchema);


module.exports = User;