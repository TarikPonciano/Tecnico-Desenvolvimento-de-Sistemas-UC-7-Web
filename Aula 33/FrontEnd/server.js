import express from "express"
import path from "path"
import fs from "fs"

const app = express()
const PORT = 3001
const __dirName = path.resolve()

app.use(express.static(path.join(__dirName, "public")))

app.get("/", (req, res)=> {
    res.status(200).sendFile(path.join(__dirName, "views", "home.html"))
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${PORT} !`)
})