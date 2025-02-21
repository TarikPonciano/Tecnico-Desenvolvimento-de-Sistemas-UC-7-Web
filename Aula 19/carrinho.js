function carregarListaCarrinho(){
    const listaCarrinho = document.getElementById("listaCarrinho")
    let listaDeCompras = localStorage.getItem("carrinho")

    if (!listaDeCompras) {
        listaCarrinho.innerHTML = "<p>Carrinho vazio</p>"
        return
    }
    listaDeCompras = JSON.parse(listaDeCompras)
    listaCarrinho.innerHTML = ""

    listaDeCompras.forEach(produto => {
        const novoPedido = document.createElement("div")
        novoPedido.classList.add("card-produto")   
        const precoFormatado = produto.preco.toLocaleString("pt-br",{style: "currency", currency:"BRL" })
        novoPedido.innerHTML = `
        <img src="${produto.imagem}">
        <div class="detalhes-produto">
            <h1> ${produto.nome}</h1>
            <span> ${precoFormatado} </span>
        </div>
        <button type="button" class="botao-remover" onclick="removerProduto(${produto.id})">Remover</button>
        `
        listaCarrinho.appendChild(novoPedido)
    });

}

function limparCarrinho(){
    localStorage.removeItem("carrinho")
    carregarListaCarrinho()
}

function finalizarCompra(){
    let listaDeCompras = localStorage.getItem("carrinho")

    if (!listaDeCompras) {
        return
    }
    listaDeCompras = JSON.parse(listaDeCompras)

    let total = 0
    listaDeCompras.forEach(produto => {
        total += produto.preco
    });

    alert(`Compra finalizada com sucesso! Valor total: ${total.toLocaleString("pt-br",{style: "currency", currency:"BRL" })}`)
    limparCarrinho()
}

carregarListaCarrinho()