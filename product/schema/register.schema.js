const Joi = require('joi'); 

const registerSchema = Joi.object().keys({ 
  name: Joi.string().alphanum().min(3).max(30).required(),
  email:Joi.string().alphanum().min(3).max(30).required(),
  password:Joi.string().alphanum().min(3).max(30).required(),
  confirm_password:Joi.string().alphanum().min(3).max(30).required(),
  tc: Joi.boolean().required() 
}); 


module.exports=registerSchema