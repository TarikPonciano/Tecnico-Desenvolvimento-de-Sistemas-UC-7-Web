import express from "express"
import fs from "fs"
import path from "path"
import cors from "cors"
import jwt from "jsonwebtoken"

const PORT = 3000
const app = express()
const __dirname = path.resolve()
const __usersdata = path.join(__dirname, "data", "users.json")


app.listen(PORT, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${PORT} `)
})