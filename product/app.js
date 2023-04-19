const  dotenv = require('dotenv')
const db=require("./config/dbConnect")
dotenv.config();
const express=require("express");
const userRouter=require("./routes/userRoutr")
const cors=require("cors")
const dbo = require("sequelize")
const modles=require("./models/index")
const app=express();
app.use(cors({origin:['https://development--wondrous-tulumba-36f52b.netlify.app','http://localhost:4200','http://examplified.live','https://examplified.live','https://keen-bombolone-a65315.netlify.app']}))
const adminRouter=require("./routes/adminRouter")
app.use(express.json())
const dbi=require("./middleware/db")
const port=process.env.PORT
const basicAuth = require('./auth');
app.listen(port,()=>{
    console.log(`Server is listinig on ${port}`)
})
app.get("/",(req,res)=>{
    res.send("hii i am from heroku")
})
app.use("/api/user",userRouter)
app.use("/api/admin",basicAuth,adminRouter)
db()
async function addData(){
//const user=await User.create({firstname:"amit",lastname:"sri"})
// 
}

addData();


