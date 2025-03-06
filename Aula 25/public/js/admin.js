alert("DEU CERTO!")

document.addEventListener("DOMContentLoaded", async () => {
    const componenteListaProdutos = document.getElementById("listaProdutos")

    const response = await fetch("/api/items")
    const listaProdutosJson = await response.json()

    listaProdutosJson.forEach(item => {
        const itemHtml = document.createElement("li")
        itemHtml.classList.add("lanche")
        itemHtml.innerHTML = `ID: ${item.id} - Nome: ${item.nome} - Preço: R$ ${item.preco} - Descrição: ${item.descricao}`
        componenteListaProdutos.appendChild(itemHtml)
    });

})