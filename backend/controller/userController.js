const userModel = require('../Models/User');

exports.createUser = async (req,res,next) => {
    try{
        const  user = await userModel.create(req.body);
        
        res.status(201).json({
            success:true,
            user
        });
    }
    catch(error){
        next(error);
    }
}
exports.getUsers = async (req,res,next) => {
    try{
        const users =  await userModel.find();
        
        res.status(200).json({
            success:true,
            users
        })
        console.log(users);
    }
    catch(error){
        next(error);
    }
}

exports.getUserById  = async (req,res,next) => {
    try{
        const  user = await  userModel.findById((req.params.id));
        if(!user){
            return  res.status(404).json({
                success:false,
                message:"UserId is not found"
            });
        }
        res.status(200).json({
            success:true,
            user
        })
    }
    catch(error){
        next(error);
    }
}

exports.updateUser = async (req,res,next) => {
    try{
        const{name,email,age} = use.body;
        const  updateUser  = await userModel.findByIdAndUpdate(req.params.id , 
            {
                name,
                email,
                age
            },
            {
                new:true,
                runValidators:true
            }
        );
        if(!updateUser){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            user:updateuser
        });
    }
    catch(error){
        next(error);
    }
}

exports.deleteUser =  async (req,res,next) => {
   try{
    const deleteUser = await  userModel.findByIdAndDelete(req.params.id);
    if(!deleteUser){
        return res.status(404).json({
            success:false,
            message:"User not found"
        });
    }
    res.status(200).json({
        success:true,
        message:"User deleted Successfully"
    });
   }
   catch(error){
    next(error);
   }
}