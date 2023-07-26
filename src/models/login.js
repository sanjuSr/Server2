const mongoose=require('mongoose');


const login=new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});
const User =mongoose.model("PEOPLE",login);
module.exports=User;