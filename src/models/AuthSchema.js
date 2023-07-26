const mongoose=require('mongoose');


const AuthSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});
const User =mongoose.model("PEOPLE",AuthSchema);
module.exports=User;