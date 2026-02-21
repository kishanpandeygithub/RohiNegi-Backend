const mongoose = require("mongoose");

const snakeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20
        },
        scienctific: {
            type: String
        },
        vanamus: {
            type: Boolean,
            required: true
        },
        color: {
            type: String
        }
    }
)

const Snake = mongoose.model("snake", snakeSchema);

module.exports = Snake;