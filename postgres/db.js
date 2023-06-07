const Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    password: "oturig02",
    host: "localhost",
    port: 5432,
    database: "dema_db"
})


module.exports = pool