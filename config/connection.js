const {Pool} = require('pg');
require('dotenv').config();

// postgres login info and port
const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    password:'fishie65',
    database:'employees',
    port: 5432
});
  
pool.connect();

module.exports = pool;