const  dotenv = require('dotenv')
dotenv.config();
const express=require("express");
const cors=require("cors")
const app=express();
app.use(cors())
const productRouter=require("../routes/productRouter")
app.use(express.json())
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is listinig on b ${port}`)
})
app.get("/",(req,res)=>{
    res.send("hii i am from heroku")
})

//app.use("/api/user",userRouter)
//app.use("/api/admin",adminRouter)
//db()
async function addData(){
//const user=await User.create({firstname:"amit",lastname:"sri"})
// 
}

addData();


