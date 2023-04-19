const { Pool, Client } = require('pg')
const {sequelize} =require("sequelize");
const environment = process.env.NODE_ENV || 'dev';
const credentials = {
  user: 'postgres',
  host: 'database1.c7zixkf68c1v.ap-south-1.rds.amazonaws.com',
  database: 'test1',
  password: 'postgres',
  port: 5432,
}
async function poolDemo() {
    const pool = new Pool(credentials);
    const now = await pool.query("SELECT NOW()");
    await pool.end();
  
    return now;
  }
  
  // Connect with a client.
  
  async function clientDemo() {
    const client = new Client(credentials);
    await client.connect();
    const now = await client.query("SELECT NOW()");
    await client.end();
  
    return now;
  }
  // (async () => {
  //   const poolResult = await poolDemo();
  //   console.log("Time with pool: " + poolResult.rows[0]["now"]);
  //   // const User = sequelize.define("User", {
  //   //   firstName: {
  //   //     type: Sequelize.STRING,
  //   //   },
  //   //   isActive: {
  //   //     type: Sequelize.BOOLEAN,
  //   //     defaultValue: false,
  //   //   },
  //   // });
    
  //  // await User.sync();
  //   const clientResult = await clientDemo();
  //   console.log("Time with client: " + clientResult.rows[0]["now"]);
  // })();