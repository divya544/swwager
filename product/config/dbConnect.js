const  dotenv = require('dotenv')
const {mongoose} = require('mongoose');
const environment = process.env.NODE_ENV || 'dev';
async function db(){
const uri = `mongodb+srv://${process.env.DATABASE_USER_NAME}:${process.env.DATABASE_PASSWORD}@job.e0jpm.mongodb.net/?retryWrites=true&w=majority`

// const client = new MongoClient(uri);
// try {
//     // Connect to the MongoDB cluster
//     await client.connect();

//     // Make the appropriate DB calls
//    // await  listDatabases(client);
//    console.log("connected to database")

// } catch (e) {
//     console.error(e);
// } finally {
//     await client.close();
// }
try {
    mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("connected"));    
    }catch (error) { 
    console.log("could not connect");    
    }

}
module.exports=db;