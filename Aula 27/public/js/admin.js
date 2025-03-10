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
})