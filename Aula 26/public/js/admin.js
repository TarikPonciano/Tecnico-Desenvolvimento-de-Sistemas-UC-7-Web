document.addEventListener("DOMContentLoaded", async () => {
    const formulario = document.getElementById("cadastroProduto")
    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()
        const campoNome = document.getElementById("campoNome")
        const campoPreco = document.getElementById("campoPreco")
        const campoDescricao = document.getElementById("campoDescricao")

        const novoProduto = {
            "nome": campoNome.value,
            "preco": campoPreco.value,
            "descricao": campoDescricao.value
        }
        console.log(novoProduto)
        const response = await fetch("/views/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoProduto)
        })
        
        alert((await response.text()).toString())
    
    })


    const listaProdutosComponente = document.getElementById("listaProdutos")

    const response = await fetch("/api/items")
    const listaProdutos = await response.json()

    if (listaProdutos.size < 1) {
        alert("Lista de Produtos Vazia")
        return
    }

    listaProdutos.forEach(produto => {
        const novoProduto = document.createElement("li")
        novoProduto.innerHTML = `ID: ${produto.id} - Nome: ${produto.nome} - Preço: ${produto.preco} - Descrição: ${produto.descricao}`
        novoProduto.classList.add("lanche")
        listaProdutosComponente.appendChild(novoProduto)
    });

})




// document.addEventListener("DOMContentLoaded", async () => {
//     const componenteListaProdutos = document.getElementById("listaProdutos")

//     const response = await fetch("/api/items")
//     const listaProdutosJson = await response.json()

//     listaProdutosJson.forEach(item => {
//         const itemHtml = document.createElement("li")
//         itemHtml.classList.add("lanche")
//         itemHtml.innerHTML = `ID: ${item.id} - Nome: ${item.nome} - Preço: R$ ${item.preco} - Descrição: ${item.descricao}`
//         componenteListaProdutos.appendChild(itemHtml)
//     });

// })