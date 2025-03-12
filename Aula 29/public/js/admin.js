document.addEventListener("DOMContentLoaded", async () => {
    const listaProdutosComponente = document.getElementById("listaProdutos")

    const response = await fetch("/api/items")

    if (response.status == 500){
        listaProdutosComponente.innerHTML = await response.json()
        return
    }

    const listaProdutos = await response.json()
    
    listaProdutos.forEach(item => {
        if (item.visibilidade == "ativo"){
        const novoItem = document.createElement("li")
        novoItem.innerHTML = `Id - ${item.id} | Nome - ${item.nome} | Preço - R$ ${item.preco} | Descrição - ${item.descricao} <button class="btn-detalhes" onclick="verDetalhes(${item.id})">Ver Detalhes</button> <button class="btn-apagar" onclick="apagarProduto(${item.id})"> Apagar </button>`
        novoItem.classList.add("lanche")
        // novoItem.addEventListener("click", () => {
        //     window.location.href = `/api/items/${item.id}`
        // })
        listaProdutosComponente.appendChild(novoItem)
        }
        
    });

    const formularioCadastro = document.getElementById("cadastroProduto")
    formularioCadastro.addEventListener("submit", async (event) => {
        event.preventDefault()

        const campoNome = document.getElementById("campoNome")
        const campoPreco = document.getElementById("campoPreco")
        const campoDescricao = document.getElementById("campoDescricao")

        const novoProduto = {"nome": campoNome.value, "preco": campoPreco.value, "descricao": campoDescricao.value}

        const responseCadastro = await fetch("/api/items", {
            method:"POST",
            headers:{"Content-Type": "application/json"}, 
            body: JSON.stringify(novoProduto)
        })

        alert(await responseCadastro.text())
        
    })

})

async function verDetalhes(id) {

    window.location.href = `/views/item/${id}`
}

async function apagarProduto(id){

    const response = await fetch(`/api/items/${id}`, {method:"DELETE"})
    alert(await response.text())
    window.location.reload()
}