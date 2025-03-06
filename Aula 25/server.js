import express from "express" // Importa o módulo express
import path from "path" // Importa o módulo path para manipulação de caminhos de arquivos

import fs from "fs"

const app = express() // Cria uma instância do express
const port = 3000 // Define a porta do servidor
const _dirName = path.resolve() // Obtém o caminho absoluto do diretório atual

// Define o diretório "public" como estático para servir arquivos estáticos
app.use(express.static(path.join(_dirName, "public")))
app.use(express.json())


// Rota para servir o arquivo home.html quando acessar /views/home
app.get("/", (req, res) => {
    res.sendFile(path.join(_dirName, "views", "home.html"))
})

// Rota para servir o arquivo admin.html quando acessar /views/admin
app.get("/views/admin", (req, res) => {
    res.sendFile(path.join(_dirName, "views", "admin.html"))
})

app.get("/api/items", (req, res) => {
    fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {

        if (err) {
            res.status(500).send("Erro ao ler arquivo!")
        } else {
            res.status(200).json(JSON.parse(data))
        }
    })
})

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(port, () => {
    console.log(`Servidor iniciado no endereço https://localhost:${port} !`)
})
