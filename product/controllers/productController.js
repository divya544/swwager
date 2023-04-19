//const userModel=require("../models/Us")
const masterService=require("../service/masterService");
const res = require("express/lib/response");
class masterController{
     static addDetails=async(req,res)=>{
        try{
       // const {master_type,name, important_date,application_fee,age_limit_details,vacency_details,how_to_fill_form,links  }=req.body;
      
        const addData=await masterService.addData(req.body)
        res.send({code:200,message:"added scuuessfuly",servedBy:"Examplified"})
        }catch(error){
          res.send({code:500,message:"Internal Server Error",data:error.message,servedBy:"Examplified"})
        }
     }
     static getAllData=async(req,res)=>{
      try{
     // const {master_type,name, important_date,application_fee,age_limit_details,vacency_details,how_to_fill_form,links  }=req.body;
      const {status}= req.query;
      const allData=await masterService.getAllData(status)
      res.send({code:200,message:"added scuuessfuly",data:allData,servedBy:"Examplified"})
      }catch(error){
        res.send({code:500,message:"Internal Server Error",data:error.message,servedBy:"Examplified"})
      }
   }
   static getDataById=async(req,res)=>{
    try{
   // const {master_type,name, important_date,application_fee,age_limit_details,vacency_details,how_to_fill_form,links  }=req.body;
      const {master_type}=req.params;
      // console.log(master_type ,"f")
    const allData=await masterService.getDataById(master_type)
    res.send({code:200,message:"added scuuessfully",data:allData,servedBy:"Examplified"})
    }catch(error){
      res.send({code:500,message:"Internal Server Error",data:error.message,servedBy:"Examplified"})
    }
 }
 static getDataByIds=async(req,res,next)=>{
  try{
 // const {master_type,name, important_date,application_fee,age_limit_details,vacency_details,how_to_fill_form,links  }=req.body;
    const {id}=req.params;
     console.log(id ,"f")
  const allData=await masterService.getDataByIds(id)
  res.send({code:200,message:"fetch scuuessfuly",data:allData,servedBy:"Examplified"})
  }catch(error){

   res.send({code:500,message:"Internal Server Error",data:error.message,servedBy:"Examplified"})
  }
}
 static getMasterType= async(req,res)=>{
   try{
   let masterType=await (masterService.getMasterType())
   res.send({code:200,message:"fetch scuuessfuly",data:masterType,servedBy:"Examplified"})
 
}catch(error){
  res.send({code:500,message:"Internal Server Error",data:error.message,servedBy:"Examplified"})
}
}
 static latestHeadline= async(req,res)=>{
  const {key} = req.query;
  console.log(key+"i am key");
  console.log("latest heading");
  let masterType=await (masterService.latestHeadline(key))
  // masterType=JSON.parse(masterType)
  res.send({code:200,message:"fetch scuuessfuly",data:masterType,servedBy:"Examplified"})
}

static latestHeadlineAndShortNameStatus= async(req,res)=>{
  const {id}= req.query;
  const {status}= req.query;
  const {column_name}= req.query;
  console.log(status+"i am status");
  console.log(id+"i am id");
  console.log(column_name+"i am column_name");
  console.log("latest headline status");
  try{
  let masterType=await (masterService.latestHeadlineAndShortNameStatus(id,status,column_name))
  // masterType=JSON.parse(masterType)
  console.log(masterType+"i am masterType");
  res.send({code:200,message:"status changed successfully",servedBy:"Examplified"})
  }
  catch(err){
    res.send({code:200,message:err.message,servedBy:"Examplified"}) 
  }
}


static getDropDown= async(req,res)=>{
  const {key}= req.query;
 
  console.log("get drop down");
  try{
  let masterType=await (masterService.getDropDown(key))
  // masterType=JSON.parse(masterType)
  console.log(masterType+"i am masterType");
  res.send({code:200,message:"value of key is fetched",data:masterType,servedBy:"Examplified"})
  }
  catch(err){
    res.send({code:200,message:err.message,servedBy:"Examplified"}) 
  }
}

static putDropDown= async(req,res)=>{
  
  console.log("put drop down");
  try{
  let masterType=await (masterService.putDropDown())
  // masterType=JSON.parse(masterType)
  console.log(masterType+"i am masterType");
  res.send({code:200,message:"status changed successfully",servedBy:"Examplified"})
  }
  catch(err){
    res.send({code:200,message:err.message,servedBy:"Examplified"}) 
  }
}



}
module.exports=masterController