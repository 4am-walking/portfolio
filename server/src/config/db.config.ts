import dotenv from 'dotenv';

dotenv.config();

const { Pool } = require('pg');
const pool = new Pool({
    username: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    password: process.env.PGPASS,
    port: process.env.PGPORT
})

module.exports = {
    query: (text: any, params: any) => pool.query(text, params)
};