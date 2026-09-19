const mongoose = require('mongoose');

const connectDatabase = () => {
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/user-management-db');
        console.log("Database Connected");
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports = connectDatabase;
