const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_HOST,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: 5432,
    database: "artguildimp"
});

module.exports = pool;

