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
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[10,"Age must be  at least 10"],
        max:[120,"Age must be less than or equal to 120"]
    },
},
{
    timestamps:true
}
);    
const userModel = mongoose.model("User",userSchema);
module.exports = userModel;