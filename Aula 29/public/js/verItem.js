document.addEventListener("DOMContentLoaded", async () => {
    // Obtém o ID do produto a partir da URL
    const elementosCaminho = window.location.pathname.split("/")
    const idProduto = elementosCaminho[elementosCaminho.length - 1]
    const titulo = document.querySelector("h1").innerHTML = `Vendo Detalhes do Produto ${idProduto}`
    // Faz uma requisição para obter os dados do produto
    const response = await fetch(`/api/items/${idProduto}`)
    const dadosProdutos = await response.json()

    // Verifica se houve um erro no servidor
    if (response.status == 500) {
        const container = document.querySelector(".container")
        container.innerHTML = JSON.stringify(dadosProdutos)
        return
    }

    // Obtém o formulário de edição
    const formulario = document.getElementById("formularioEdicao")

    // Adiciona um evento de envio ao formulário
    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

        // Obtém os valores dos campos do formulário
        const campoNome = document.getElementById("campoNome")
        const campoPreco = document.getElementById("campoPreco")
        const campoDescricao = document.getElementById("campoDescricao")

        const radioAtivo = document.getElementById("radio1")
        const radioInativo = document.getElementById("radio2")

        // Define a visibilidade do produto com base no rádio selecionado
        let visibilidade = "ativo"
        if (radioAtivo.checked == true) {
            visibilidade = "ativo"
        } else {
            visibilidade = "inativo"
        }

        // Cria um objeto com os novos dados do produto
        const dadosNovos = {
            "nome": campoNome.value,
            "preco": campoPreco.value,
            "descricao": campoDescricao.value,
            "visibilidade": visibilidade
        }

        // Faz uma requisição para atualizar os dados do produto
        const responseEnvio = await fetch(`/api/items/${idProduto}`, { method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(dadosNovos)})

        // Exibe uma mensagem de alerta com a resposta do servidor
        alert(await responseEnvio.text())
    })

    // Preenche os campos do formulário com os dados do produto
    const campoNome = document.getElementById("campoNome")
    const campoPreco = document.getElementById("campoPreco")
    const campoDescricao = document.getElementById("campoDescricao")
    const radioAtivo = document.getElementById("radio1")
    const radioInativo = document.getElementById("radio2")

    campoNome.value = dadosProdutos["nome"]
    campoPreco.value = dadosProdutos["preco"]
    campoDescricao.value = dadosProdutos["descricao"]

    // Define o rádio de visibilidade com base nos dados do produto
    if (dadosProdutos["visibilidade"] == "ativo") {
        radioAtivo.checked = true
        radioInativo.checked = false
    } else {
        radioAtivo.checked = false
        radioInativo.checked = true
    }
})