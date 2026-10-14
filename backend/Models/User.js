const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
        minlength:2,
        maxlength:50
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:10,
        maxLength:30
    }
},
{
    timestamps:true
}
);    
const userModel = mongoose.model("User",userSchema);
module.exports = userModel;