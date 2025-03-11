import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const port = 3000;
const _dirName = path.resolve();

app.use(express.static(path.join(_dirName, "public")))
app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(_dirName, "views", "home.html"))
})

app.get("/views/admin/", (req, res) => {
    res.status(200).sendFile(path.join(_dirName, "views", "admin.html"))
})

app.get("/api/items", (req, res) => {
    try {
        fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {
            if (err) {
                return res.status(500).json("{'error':Erro na leitura dos arquivos!, 'status': 500}")
            } else {
                const dados = JSON.parse(data)
                if (dados.length === 0) {
                    return res.status(500).json("{'error':Não há arquivos cadastrados, 'status': 500}")
                } else {
                    return res.status(200).json(dados)
                }
            }
        })
    } catch {
        return res.status(500).json("{'error':Erro ao acessar o arquivo!, 'status': 500}")
    }
})

app.post("/api/items", (req,res) =>{
    const novoProduto = req.body

    fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {
        if (err){
            res.status(500).send("Erro ao ler arquivo de dados!")
        }else{
            const items = JSON.parse(data)
            novoProduto["id"] = items[items.length - 1].id + 1
            items.push(novoProduto)

            fs.writeFile(path.join(_dirName, "data", "items.json"), JSON.stringify(items, null , 2), (err) => {
                if (err){
                    res.status(500).send("Erro ao armazenar informações!")
                }
                else{
                    res.status(201).send("Item inserido com sucesso!")
                }
            })
        }
    })
    
})





// app.post("/api/items", (req, res) => {
//     const dadosNovoProduto = req.body
//     try{
//     fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {
//         if (err) {
//             res.status(500).send("Erro na leitura dos arquivos!")
//         }
//         else {
//             const dadosAntigos = JSON.parse(data)
//             dadosNovoProduto["id"] = dadosAntigos[dadosAntigos.length - 1].id + 1
//             dadosAntigos.push(dadosNovoProduto)

//             fs.writeFile(path.join(_dirName, "data", "items.json"), JSON.stringify(dadosAntigos, null, 2), (err) => {
//                 if (err) {
//                     res.status(500).send("Erro ao escrever o arquivo!")
//                 } else {
//                     res.status(201).send("PRODUTO CADASTRADO COM SUCESSO!")
//                 }
//             })
//         }
//     })
//     }
//     catch{
//         fs.writeFile(path.join(_dirName,"data", ""))
//     }
// })


app.listen(port, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${port} !`)
})