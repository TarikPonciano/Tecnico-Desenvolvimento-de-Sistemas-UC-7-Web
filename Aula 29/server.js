import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const port = 3000;
const _dirName = path.resolve();

// Configura o servidor para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(_dirName, "public")));
// Configura o servidor para interpretar JSON no corpo das requisições
app.use(express.json());

// Rota para a página inicial
app.get("/", (req, res) => {
    // Envia o arquivo "home.html" como resposta
    res.status(200).sendFile(path.join(_dirName, "views", "home.html"));
});

// Rota para a página de administração
app.get("/views/admin/", (req, res) => {
    // Envia o arquivo "admin.html" como resposta
    res.status(200).sendFile(path.join(_dirName, "views", "admin.html"));
});

// Rota para a página de detalhes do item
app.get("/views/item/:id", (req, res) => {
    // Envia o arquivo "item.html" como resposta
    res.status(200).sendFile(path.join(_dirName, "views", "item.html"));
});

// Rota para obter todos os itens
app.get("/api/items", (req, res) => {
    try {
        // Lê o arquivo "items.json" e envia os dados como resposta
        fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {
            if (err) {
                return res.status(500).json("{'error':Erro na leitura dos arquivos!, 'status': 500}");
            } else {
                const dados = JSON.parse(data);
                if (dados.length === 0) {
                    return res.status(500).json("{'error':Não há arquivos cadastrados, 'status': 500}");
                } else {
                    return res.status(200).json(dados);
                }
            }
        });
    } catch {
        return res.status(500).json("{'error':Erro ao acessar o arquivo!, 'status': 500}");
    }
});

// Rota para cadastrar um novo item
app.post("/api/items", (req, res) => {
    const novoProduto = req.body;

    // Lê o arquivo "items.json" e adiciona o novo item
    fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Erro ao ler arquivo de dados!");
        } else {
            const items = JSON.parse(data);
            novoProduto["id"] = items[items.length - 1].id + 1;
            novoProduto["visibilidade"] = "ativo";
            items.push(novoProduto);

            // Escreve o novo item no arquivo "items.json"
            fs.writeFile(path.join(_dirName, "data", "items.json"), JSON.stringify(items, null, 2), (err) => {
                if (err) {
                    res.status(500).send("Erro ao armazenar informações!");
                } else {
                    res.status(201).send("Item inserido com sucesso!");
                }
            });
        }
    });
});

// Rota para obter um item específico pelo ID
app.get("/api/items/:id", (req, res) => {
    const idEscolhido = req.params.id;

    // Lê o arquivo "items.json" e envia o item correspondente como resposta
    fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {
        if (err) {
            return res.status(500).json("{'error':Erro na leitura dos arquivos!, 'status': 500}");
        } else {
            const itens = JSON.parse(data);
            const posicao = itens.findIndex((item) => item.id == idEscolhido);

            if (posicao == -1) {
                return res.status(500).json("{'error':Item não encontrado!, 'status': 500}");
            } else {
                res.status(200).json(itens[posicao]);
            }
        }
    });
});

// Rota para apagar um item pelo ID (marcar como inativo)
app.delete("/api/items/:id", (req, res) => {
    const idEscolhido = req.params.id;

    // Lê o arquivo "items.json" e marca o item como inativo
    fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Erro na leitura dos arquivos!");
        } else {
            const itens = JSON.parse(data);
            const posicao = itens.findIndex((item) => item.id == idEscolhido);

            if (posicao == -1) {
                return res.status(500).send("Item não encontrado!");
            } else {
                // Marca o item como inativo
                itens[posicao].visibilidade = "inativo";

                // Escreve a atualização no arquivo "items.json"
                fs.writeFile(path.join(_dirName, "data", "items.json"), JSON.stringify(itens, null, 2), (err) => {
                    if (err) {
                        return res.status(500).send("Erro ao remover arquivo!");
                    } else {
                        return res.status(200).send("Arquivo removido com sucesso!");
                    }
                });
            }
        }
    });
});

// Rota para atualizar um item pelo ID
app.put("/api/items/:id", (req, res) => {
    // Extrai informação da requisição (req.body)
    const dadosNovos = req.body;
    const idItem = parseInt(req.params.id);

    // Lê o arquivo original
    fs.readFile(path.join(_dirName, "data", "items.json"), "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Erro na leitura dos arquivos!");
        } else {
            // Encontra o item a ser modificado
            const itens = JSON.parse(data);
            const itemOriginal = itens.find((item) => item.id == idItem);

            if (!itemOriginal) {
                return res.status(500).send("Item não encontrado!");
            }

            // Troca as informações do item
            itemOriginal.nome = dadosNovos["nome"];
            itemOriginal.preco = dadosNovos["preco"];
            itemOriginal.descricao = dadosNovos["descricao"];
            itemOriginal.visibilidade = dadosNovos["visibilidade"];

            // Sobrescreve o arquivo original com o novo arquivo
            fs.writeFile(path.join(_dirName, "data", "items.json"), JSON.stringify(itens, null, 2), (err) => {
                if (err) {
                    return res.status(500).send("Erro ao atualizar o arquivo!");
                } else {
                    return res.status(200).send("Item atualizado com sucesso!");
                }
            });
        }
    });
});


// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${port} !`);
});


