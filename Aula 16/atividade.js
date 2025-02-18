// Crie um programa de lanchonete que repete 5 vezes a seguinte operação:
// Cadastrar produto
// Pedir codigo
// Pedir nome
// Pedir preço

// Após coletar as informações do produto, criar um Objeto Javascript para armazenar as informações

// Após criar o objeto javascript, armazenar esse objeto em uma lista de produtos

// Antes de exibir os produtos no cardápio, altere o preço de todos para refletir um aumento de 10% de imposto.(O preço deve aumentar 10%)

// Ao final, exibir um alert para cada produto mostrando suas informações na tela.

const produtos = []

for (let i = 0; i < 2; i++){
    alert(`Cadastro do Produto N°${parseInt(i)+1}`)
    let codigo = parseInt(i)+1
    let nome = prompt(`Digite o nome do produto ${parseInt(i)+1}:`)
    let preco = parseFloat(prompt(`Digite o preço do produto ${parseInt(i)+1}:`))

    const produto = {
        "codigo": codigo,
        "nome": nome,
        "preco": preco
    }

    produtos.push(produto)
}

const cardapio = produtos.map( produto =>{
    const novoPreco = produto.preco * 1.1
    produto.preco = novoPreco.toFixed(2)
    return produto
}
)

produtos.forEach(produto => {
alert(`
Produto ${produto.codigo}

Codigo: ${produto.codigo}
Nome: ${produto.nome}
Preço: R$ ${produto.preco}
    
    `)
})
