const { QueryTypes, sequelize } = require('sequelize');
const db = require("../models/index")

const models =require("../models/index")
class masterService{
        static addData=async(body)=>{
        try{
       const res= await  models.master_data.create(body
        )
       // console.log("res is",res);
        return res
       }catch(error){
         throw new Error("something error")
     }
       

     }

static getDataByIds=async(id)=>{
   try{
   return await models.master_data.findAll({where:{
      id:id
   }});
}
catch(error){
    throw new Error("something error")
}
}
static getMasterType=async()=>{
   try{
   return await models.master_all_data.findOne({where:{
      name:"master_type"
   }});}
   catch(error){
      throw new Error("something error")
  }
   }
 static  async  getQualification(){
 return await models.qualifications.findAll();
    }

   static getAllData = async (status) => {
     if(!status){
      return await models.master_data.findAll();

     }
     else{
      const users = await db.sequelize.query(`select id,name from master_data where latest_headline= '${status}'`, { type: QueryTypes.SELECT });
      console.log(users + "fguesjgfyjh");
      return users;
      
     }
      

      // console.log("res is",res);



   }

   static getDataById = async (master_data) => {
      return await models.master_data.findAll({
         where: {
            master_type: master_data
         }
      });
   }


   static latestHeadline = async (key) => {
      // return await models.master_all_data
      const users = await db.sequelize.query(`select id,name from master_data md where md.name like '%${key}%'`, { type: QueryTypes.SELECT });
      console.log(users + "fguesjgfyjh");
      return users;
   }

   static latestHeadlineAndShortNameStatus = async (id,status,column_name) => {
      // return await models.master_all_data
      const users = await db.sequelize.query(`update master_data set ${column_name}= '${status}'  where id = ${id}`, { type: QueryTypes.SELECT });
      console.log(users + "fguesjgfyjh");
      return users;
   }

   static getDropDown = async (key) => {
      // return await models.master_all_data
      const users = await db.sequelize.query(`select value from master_all_data md where md.name like '%${key}%'`, { type: QueryTypes.SELECT });
      console.log(users + "getDropDown");
      return users;
   }

   static putDropDown = async (id,status,column_name) => {
      // return await models.master_all_data
      // const users = await db.sequelize.query(`update master_data set ${column_name}= '${status}'  where id = ${id}`, { type: QueryTypes.SELECT });
      // console.log(users + "fguesjgfyjh");
      return "users";
   }

   



}
module.exports = masterService