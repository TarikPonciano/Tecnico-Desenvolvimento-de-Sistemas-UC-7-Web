document.addEventListener("DOMContentLoaded", async () => {
    const listaProdutosComponente = document.getElementById("listaProdutos")

    const response = await fetch("/api/items")

    if (response.status == 500){
        listaProdutosComponente.innerHTML = await response.text()
        return
    }

    const listaProdutos = await response.json()
    
    listaProdutos.forEach(item => {
        const novoItem = document.createElement("li")
        novoItem.innerHTML = `Id - ${item.id} | Nome - ${item.nome} | Preço - R$ ${item.preco} | Descrição - ${item.descricao}`
        novoItem.classList.add("lanche")
        listaProdutosComponente.appendChild(novoItem)
    });

    const formularioComponente = document.getElementById("cadastroProduto")
    formularioComponente.addEventListener("submit", async (event) => {
        event.preventDefault()
        const campoNome = document.getElementById("campoNome")
        const campoPreco = document.getElementById("campoPreco")
        const campoDescricao = document.getElementById("campoDescricao")

        const novoProduto = {"nome": campoNome.value, "preco": campoPreco.value, "descricao": campoDescricao.value}

        const responseCadastro = await fetch("/api/items",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(novoProduto)
        } )

        alert(await responseCadastro.text())
        
    })


})