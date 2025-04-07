import express from "express"
import fs from "fs"
import { getConnection, closeConnection } from "./db.js"
import cors from "cors"
import path from "path"
import dotenv from "dotenv"

const app = express()
const pool = getConnection()

app.use(express.json())

app.get("/usuarios", (req, res) => {
    const response = pool.query("SELECT * FROM usuarios;")

    res.status(200).json(response.rows)


})

app.post("/usuarios", (req, res) => {
    const dados = req.body;
    console.log(dados)

    try {
        const result = pool.query(`
    INSERT INTO usuarios VALUES (default, $1, $2, $3, $4)
    `, [dados.login, dados.password, dados.email, dados.data_nascimento])

        res.status(201).json(result.rows)
    }catch(error){
        console.log("Erro na inserção", error)
    }
    })


app.listen(process.env.SERVER_PORT, () => {
    console.log(`SERVIDOR INICIADO NO ENDEREÇO http://localhost:${process.env.SERVER_PORT} `)
})