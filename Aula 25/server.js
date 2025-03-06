import express from "express"
import path from "path"

const app = express()
const port = 3000
const _dirName = path.resolve()

app.use(express.static(path.join(_dirName, "public")))

app.get("/views/home", (req, res) => {
    res.sendFile(path.join(_dirName, "views", "home.html"))
})

app.get("/views/admin", (req, res) => {
    res.sendFile(path.join(_dirName, "views", "admin.html"))
})


app.listen(port, () =>{
    console.log(`Servidor iniciado no endereço https://localhost:${port} !`)
})
