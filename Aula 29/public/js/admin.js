document.addEventListener("DOMContentLoaded", async () => {
    // Obtém o elemento da lista de produtos
    const listaProdutosComponente = document.getElementById("listaProdutos")

    // Faz uma requisição para obter os itens da API
    const response = await fetch("/api/items")

    // Verifica se houve um erro no servidor
    if (response.status == 500){
        listaProdutosComponente.innerHTML = await response.json()
        return
    }

    // Converte a resposta em JSON
    const listaProdutos = await response.json()
    
    // Itera sobre cada item da lista de produtos
    listaProdutos.forEach(item => {
        // Verifica se o item está ativo
        if (item.visibilidade == "ativo"){
            // Cria um novo elemento de lista para o item
            const novoItem = document.createElement("li")
            // Define o conteúdo HTML do novo item
            novoItem.innerHTML = `Id - ${item.id} | Nome - ${item.nome} | Preço - R$ ${item.preco} | Descrição - ${item.descricao} <button class="btn-detalhes" onclick="verDetalhes(${item.id})">Ver Detalhes</button> <button class="btn-apagar" onclick="apagarProduto(${item.id})"> Apagar </button>`
            novoItem.classList.add("lanche")
            // Adiciona o novo item à lista de produtos
            listaProdutosComponente.appendChild(novoItem)
        }
    });

    // Obtém o formulário de cadastro de produtos
    const formularioCadastro = document.getElementById("cadastroProduto")
    // Adiciona um evento de envio ao formulário
    formularioCadastro.addEventListener("submit", async (event) => {
        event.preventDefault()

        // Obtém os valores dos campos do formulário
        const campoNome = document.getElementById("campoNome")
        const campoPreco = document.getElementById("campoPreco")
        const campoDescricao = document.getElementById("campoDescricao")

        // Cria um novo objeto de produto com os valores do formulário
        const novoProduto = {"nome": campoNome.value, "preco": campoPreco.value, "descricao": campoDescricao.value}

        // Faz uma requisição para cadastrar o novo produto
        const responseCadastro = await fetch("/api/items", {
            method:"POST",
            headers:{"Content-Type": "application/json"}, 
            body: JSON.stringify(novoProduto)
        })

        // Exibe uma mensagem de alerta com a resposta do servidor
        alert(await responseCadastro.text())
    })
})

// Função para redirecionar para a página de detalhes do item
async function verDetalhes(id) {
    window.location.href = `/views/item/${id}`
}

// Função para apagar um produto
async function apagarProduto(id){
    // Faz uma requisição para apagar o produto
    const response = await fetch(`/api/items/${id}`, {method:"DELETE"})
    // Exibe uma mensagem de alerta com a resposta do servidor
    alert(await response.text())
    // Recarrega a página
    window.location.reload()
}