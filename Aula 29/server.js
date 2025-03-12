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
            novoProduto["visibilidade"] = "ativo"
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

app.get("/api/items/:id", (req,res) =>{
    const idEscolhido = req.params.id

    fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err,data) => {
        if(err){
            return res.status(500).json("{'error':Erro na leitura dos arquivos!, 'status': 500}")
        }else{
            const itens = JSON.parse(data)
            
            const posicao = itens.findIndex((item) => item.id == idEscolhido)

            if (posicao == -1){
                return res.status(500).json("{'error':Item não encontrado!, 'status': 500}")
            }else{
                res.status(200).json(itens[posicao])
            }
        }
    })
})

app.delete("/api/items/:id", (req, res) => {
    const idEscolhido = req.params.id

    fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err,data) => {
        if(err){
            return res.status(500).send("Erro na leitura dos arquivos!")
        }else{

            const itens = JSON.parse(data)
            
            const posicao = itens.findIndex((item) => item.id == idEscolhido)

            if (posicao == -1){
                return res.status(500).send("Item não encontrado!")
            }else{
                
                // const itensAtualizado = itens.filter((item) => item.id != idEscolhido) > Caso queira remover o elemento completamente
                itens[posicao].visibilidade = "inativo"

                fs.writeFile(path.join(_dirName, "data", "items.json"), JSON.stringify(itens, null, 2), (err)=>{
                    if (err){
                        return res.status(500).send("Erro ao remover arquivo!")
                    }else{
                        return res.status(200).send("Arquivo removido com sucesso!")
                    }
                })
            }

        }
    })
})



app.put("/api/items/:id", (req, res) => {
    //Extrair informação da requisição (req.body)
    //Ler o arquivo original
    //Encontrar o item a ser modificado
    //Trocar as informações do item
    //Sobrescrever o arquivo original com o novo arquivo
})




app.listen(port, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${port} !`)
})