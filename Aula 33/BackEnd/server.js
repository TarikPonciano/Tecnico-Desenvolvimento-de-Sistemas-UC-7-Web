import express from "express";
import path from "path";
import fs from "fs";

const app = express()
const PORT = 3000
const __dirName = path.resolve()
const __dirItens = path.join(__dirName, "data", "itens.json")

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Bem vindo à minha api. Os comandos estarão na rota /api!")
})
// Escolha um tema e preencha o arquivo itens.json com pelo menos 10 objetos do tema escolhido. 
// Exiba os itens cadastrados através da rota /api/itens
app.get("/api/itens", (req, res) => {
    try {
        fs.readFile(__dirItens, (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ "message": `Erro ao ler arquivo.` })
            } else {
                const dataJson = JSON.parse(data)
                if (dataJson.length > 0) {
                    return res.status(200).json(dataJson)
                } else {
                    return res.status(204).json({ "message": "Arquivo vazio..." })
                }
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "message": `Erro ao executar operação.` })
    }
})

app.get("/api/itens/:id", (req, res) => {
    const idEscolhido = parseInt(req.params.id)
    if (!idEscolhido) {
        return res.status(400).json({ "message": "ID Inválido. Use números!" })
    }

    try {
        fs.readFile(__dirItens, (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ "message": `Erro ao ler arquivo.` })
            } else {
                const dataJson = JSON.parse(data)

                const itemEscolhido = dataJson.find((item) => item.id == idEscolhido)

                if (!itemEscolhido) {
                    return res.status(500).json({ "message": `Nenhum arquivo encontrado com esse ID.` })
                }

                return res.status(200).json(itemEscolhido)
            }
        })

    } catch (error) {
        return res.status(500).json({ "message": "Erro ao executar operação!" })
    }
})

app.post("/api/itens", (req, res) => {
    const novoItem = req.body
    
    if (!novoItem) {
        return res.status(500).send("Erro ao executar operação!")
    }
    if (!novoItem.titulo || !novoItem.autor || !novoItem.ano_lancamento) {
        return res.status(500).send("Documento incompleto para inserção!")
    }

    try {

        fs.readFile(__dirItens, (err, data) => {
            if (err) {
                return res.status(500).send("Erro ao executar operação!")
            } else {
                const dataJson = JSON.parse(data)

                const novoId = dataJson[dataJson.length - 1].id + 1
                novoItem["id"] = novoId

                dataJson.push(novoItem)

                fs.writeFile(__dirItens, JSON.stringify(dataJson, null, 2), () => {
                    return res.status(201).send("Item inserido com sucesso!")
                })
            }
        })

    } catch (error) {
        return res.status(500).send("Erro ao executar operação!")
    }

})

app.delete("/api/itens/:id", (req,res) => {
    const idEscolhido = parseInt(req.params.id)
    if (!idEscolhido) {
        return res.status(400).json({ "message": "ID Inválido. Use números!" })
    }

    try {

        fs.readFile(__dirItens, (err, data) => {
            if (err) {
                return res.status(500).send("Erro ao executar operação!")
            } else {
                const dataJson = JSON.parse(data)
                const dataFinal = dataJson.filter((item) => item.id != idEscolhido)

                fs.writeFile(__dirItens, JSON.stringify(dataFinal, null, 2), () => {
                    return res.status(201).send("Item inserido com sucesso!")
                })
            }
        })

    } catch (error) {
        return res.status(500).send("Erro ao executar operação!")
    }

})

app.listen(PORT, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${PORT} !`)
})