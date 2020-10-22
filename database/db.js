const Pool = require('pg').Pool
const dotenv = require('dotenv')
dotenv.config({ path: '.env' }); 
const pool = new Pool({
    user: process.env.POSTGRES_USERNAME,
    password: process.env.PASSWORD,
    host: "localhost",
    port: 5432,
    database: "perndatabase"
});

module.exports = pool;
