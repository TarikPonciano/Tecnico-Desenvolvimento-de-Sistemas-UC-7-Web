import express from "express";
import path from "path";

const app = express()
const port = 3000
const __dirName = path.resolve()

app.use(express.static(path.join(__dirName,"public")))

// Criar as páginas home.html, login.html, admin.html e inserir.html e implementar suas rotas no servidor
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirName,"home.html"))
})

app.get("/login", (req, res) => {
    res.end("PÁGINA DE LOGIN")
})


app.listen(port, () =>{
    console.log(`Servidor inicializado no endereço localhost:${port}`)
})