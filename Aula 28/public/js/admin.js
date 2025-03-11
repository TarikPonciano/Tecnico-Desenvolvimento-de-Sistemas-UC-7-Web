document.addEventListener("DOMContentLoaded", async () => {
    const listaProdutosComponente = document.getElementById("listaProdutos")

    const response = await fetch("/api/items")

    if (response.status == 500){
        listaProdutosComponente.innerHTML = await response.json()
        return
    }

    const listaProdutos = await response.json()
    
    listaProdutos.forEach(item => {
        const novoItem = document.createElement("li")
        novoItem.innerHTML = `Id - ${item.id} | Nome - ${item.nome} | Preço - R$ ${item.preco} | Descrição - ${item.descricao}`
        novoItem.classList.add("lanche")
        listaProdutosComponente.appendChild(novoItem)
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

