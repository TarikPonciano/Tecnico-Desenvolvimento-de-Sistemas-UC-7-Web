import fs from "fs"
import dotenv from "dotenv"
import pg from "pg"


dotenv.config()

let pool


export const getConnection = () =>{
    if(!pool){
        pool = new pg.Pool({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            ssl:{
                rejectUnauthorized: true,
                ca: fs.readFileSync("./ca.pem").toString()
            }
        })
    }
    return pool
}

export const closeConnection = async () => {
    if (pool){
        await pool.end()
        pool = null
    }
}

