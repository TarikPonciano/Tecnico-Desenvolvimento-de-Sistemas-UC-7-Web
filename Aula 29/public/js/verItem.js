document.addEventListener("DOMContentLoaded", async () => {
    const elementosCaminho = window.location.pathname.split("/")
    const idProduto = elementosCaminho[elementosCaminho.length - 1]

    const response = await fetch(`/api/items/${idProduto}`)
    const dadosProdutos = await response.json()

    if (response.status == 500) {
        const container = document.querySelector(".container")
        container.innerHTML = JSON.stringify(dadosProdutos)
        return
    }

    const formulario = document.getElementById("formularioEdicao")

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

        const campoNome = document.getElementById("campoNome")
        const campoPreco = document.getElementById("campoPreco")
        const campoDescricao = document.getElementById("campoDescricao")

        const radioAtivo = document.getElementById("radio1")
        const radioInativo = document.getElementById("radio2")

        let visibilidade = "ativo"

        if (radioAtivo.checked == true) {
            visibilidade = "ativo"
        } else {
            visibilidade = "inativo"
        }

        const dadosNovos = {
            "nome": campoNome.value,
            "preco": campoPreco.value,
            "descricao": campoDescricao.value,
            "visibilidade": visibilidade
        }

        const responseEnvio = await fetch(`/api/items/${idProduto}`, { method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(dadosNovos)})

        alert(await responseEnvio.text())


    })

    const campoNome = document.getElementById("campoNome")
    const campoPreco = document.getElementById("campoPreco")
    const campoDescricao = document.getElementById("campoDescricao")
    const campoVisibilidade = document.querySelector("input[type='radio']:checked")
    const radioAtivo = document.getElementById("radio1")
    const radioInativo = document.getElementById("radio2")

    campoNome.value = dadosProdutos["nome"]
    campoPreco.value = dadosProdutos["preco"]
    campoDescricao.value = dadosProdutos["descricao"]

    if (dadosProdutos["visibilidade"] == "ativo") {
        radioAtivo.checked = true
        radioInativo.checked = false
    } else {
        radioAtivo.checked = false
        radioInativo.checked = true
    }

})