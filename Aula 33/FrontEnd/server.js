import express from "express"
import path from "path"
import fs from "fs"

const app = express()
const PORT = 3001
const __dirName = path.resolve()

app.use(express.static(path.join(__dirName, "public")))

app.get("/", (req, res)=> {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${PORT} !`)
})