// Importar dependências
// 1. express
// 2. path

import express from "express";
import path from "path";

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

//Configuração de rota de comunicação com o servidor
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirName, "home.html"))
})

//Inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor inicializado no endereço http://localhost:${port}`)
})



