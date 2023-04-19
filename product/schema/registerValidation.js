const Joi = require('joi');
const { validate } = require('./register.schema');

const schema = Joi.object({
    qualification_code: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    qualification_display_name: Joi.string().required(),

    is_active: Joi.boolean(),

  
})
    

async function   validateS(body){
 return await schema.validate({body})
}
module.exports=validateS
    //console.log(schema.validate({ username: 'abc', birth_year: 1994 }))

// -> { value: { username: 'abc', birth_year: 1994 } }
//console.log(schema.validate({}))

// -> { value: {}, error: '"username" is required' }

// Also -

// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) { }