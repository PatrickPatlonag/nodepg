require('dotenv').config()
const { Pool} = require('pg')

const pool = new Pool({
    user: `${process.env.DB_USER}`,
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`,
    password: `${process.env.DB_PASSWORD}`,
    port: process.env.DB_PORT,
    ssl: true,

})

pool.query(`SELECT owner_id, name, gender, age, occupation FROM owners WHERE occupation = 'Programmer'`, (error, result)=>{
    if (error) {
        throw error
    }
    console.log(result.rows)
});