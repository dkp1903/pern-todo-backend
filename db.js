const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "Progr@mit5",
    host: "localhost",
    port: 5432,
    database: "perntododatabase"
});

module.exports = pool;
