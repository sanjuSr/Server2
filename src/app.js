const express=require("express");
const app=express();
const authRouter=express.Router();
const mongoose=require('mongoose');
const dotenv=require("dotenv");

const User=require("./models/AuthSchema");

dotenv.config();
app.use(express.json());

// var status=false;

// const pass=(req,res,next)=>{
//     status=false
//     const {password}=req.body
//     if(password=='1234'){
//         status=true
//         console.log("\nsuccessful\n")
//         next();
//     }
//     else{console.log("\nError\n")
// next();}
// }

mongoose.connect(process.env.DATABASE
    ).then(()=>{
        console.log("DATABASE IS CONNECTED SUCCESSFULLY")
    }).catch((err)=>{
        console.log("DATABASE CONNECTION NOT SUCCESSFULL")
    })

// app.post("/login",pass,(req,res)=>{
//     if(status==true){
//         res.send('Login successfull');
//     }
//     else{
//         res.send("Login failed");
//     }
// });


// app.get("/",(req,res)=>{
//     res.send("GOT IT");
// })

// app.post("/",(req,res)=>{
//     res.send(req.body);
//     const {email,password}=req.body
//     console.log(email);
// })
// app.post("/reg",(req,res)=>{
//     const {Name,Email,Password}=req.body;
//     const user=new User({
//         name:Name,
//         email:Email,
//         password:Password
//     });
    
//     user.save().then(()=>{
//         res.send("USER SAVED")
//     })
//     .catch(()=>{
//         res.send("USER NOT SAVED")
//     });
// });

app.post("/reg",(req,res)=>{    
    const user=User.findOne({email:req.body.Email}).then((usr)=>{
        if(usr){
            res.send("Email already exist");
        }else{
            const {Name,Email,Password}=req.body;
    const user=new User({
        name:Name,
        email:Email,
        password:Password
    });
    user.save().then(()=>{
                res.send("USER SAVED")
            })
            .catch(()=>{
                res.send("USER NOT SAVED")
            });
        }
    });
});

app.post("/login",(req,res)=>{
   
    const user=User.findOne({email:req.body.Email,password:req.body.Password}).then((usr)=>{
        if(usr){
            res.send("Login success");
        }else{
            res.send("check email or password")
        }   
    });
});

app.listen(8000,()=>{
    console.log("SERVER LISTENING AT PORT 8000");
})