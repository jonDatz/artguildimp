const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password: "b0nesb0nesb0nes",
    host: "localhost",
    port: 5432,
    database: "artguildimp"
});

module.exports = pool;

