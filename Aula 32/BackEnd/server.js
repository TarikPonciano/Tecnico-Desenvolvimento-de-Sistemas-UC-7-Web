import express from "express";
import path from "path";
import fs from "fs";

const app = express()
const PORT = 3000
const __dirName = path.resolve()
const __dirItens = path.join(__dirName, "data", "itens.json")

app.get("/", (req, res) => {
    res.status(200).send("Bem vindo à minha api. Os comandos estarão na rota /api!")
})
// Escolha um tema e preencha o arquivo itens.json com pelo menos 10 objetos do tema escolhido. 
// Exiba os itens cadastrados através da rota /api/itens
app.get("/api/itens", (req,res) => {
    try {
        fs.readFile(__dirItens, (err, data) => {
            if (err){
                console.log(err)
                return res.status(500).json({"message": `Erro ao ler arquivo.`})
            }else{
                const dataJson = JSON.parse(data)
                if (dataJson.length > 0){
                    return res.status(200).json(dataJson)
                }else{
                    return res.status(204).json({"message": "Arquivo vazio..."})
                }
            }
        })
        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"message": `Erro ao executar operação.`})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${PORT} !`)
})