const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profileImg:{
        type:String
    }
})


const User = mongoose.model("user", userSchema);
module.exports = User;