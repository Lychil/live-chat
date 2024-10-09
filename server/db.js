const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "12394123qW",
    host: "localhost",
    port: 5432,
    database: "live_chat"
})

module.exports = pool;