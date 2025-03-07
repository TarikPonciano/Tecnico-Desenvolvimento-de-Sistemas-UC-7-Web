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

app.get("/views/admin", (req, res) =>{
    res.status(200).sendFile(path.join(_dirName, "views", "admin.html"))
})

app.get("/api/items", (req, res) => {
    fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {
        if (err){
            res.status(500).send("Erro ao consultar items!")
        }else{
            res.status(200).json(JSON.parse(data))
        }
    })
})

app.post("/views/admin", (req, res) => {
    const novoProduto = req.body;
    console.log(novoProduto);
    res.status(200).send("Requisição recebida!");
});


app.listen(port, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${port} !`)
})