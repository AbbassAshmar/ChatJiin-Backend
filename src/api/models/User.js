const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },

        email : {
            type : String,
            required : true
        },

        password : {
            type : String,
            required: true,
        },

        profile_picture : {
            type : Image,
            required : false,
            null : true,
            default : null
        }
    }
)

const User = mongoose.model("User", userSchema);
module.exports = User;