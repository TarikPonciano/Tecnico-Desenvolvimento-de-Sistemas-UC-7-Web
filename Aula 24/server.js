// Importar dependências
// 1. express
// 2. path
// 3. fs

import express from "express";
import path from "path";
import fs from "fs";

//Configurar e criar o servidor

//Declarar variáveis importantes

//Inicializar app(servidor express) e declarar porta
const app = express();
const port = 3000;

//Capturar nome da pasta atual
const __dirName = path.resolve();

//Configuração de middlewares

//Tornar público css e arquivos js
app.use(express.static(path.join(__dirName, "public")))
app.use(express.json())

//Configuração de rota de comunicação com o servidor
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirName, "home.html"))
})

app.get("/admin", (req, res) =>{
    res.sendFile(path.join(__dirName, "admin.html"))
})

//Configuração de rota da api

app.get("/api/items", (req,res) =>{
    fs.readFile(path.join(__dirName, "data", "items.json"), "utf8", (err, data) => {
        if (err){
            res.status(500).send("Erro ao ler os dados!")
        }else{
            res.status(200).json(JSON.parse(data))
        }

    })
}
)

app.post("/api/items", (req,res) =>{
    const novoItem = req.body

    fs.readFile(path.join(__dirName, "data", "items.json"), "utf8", (err, data) => {
        if (err){
            res.status(500).send("Erro ao ler os dados!")
        }else{
            const items = JSON.parse(data)
            items.push(novoItem)
            fs.writeFile(path.join(__dirName, "data", "items.json"), JSON.stringify(items,null,2), (err) =>{
                if (err){
                    res.status(500).send("Erro ao inserir informação.")
                }else{
                    res.status(201).send("Item inserido com sucesso!")
                }
            })
        }

    })

})

//Inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor inicializado no endereço http://localhost:${port}`)
})



