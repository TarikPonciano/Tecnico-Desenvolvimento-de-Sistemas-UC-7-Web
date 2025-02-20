function carregarListaProdutos(){
    const listaProdutos = document.querySelector(".lista-produtos")
    listaProdutos.innerHTML = ""

    produtos.forEach(produto =>{
        const novoItemDaLista = document.createElement("div")
        novoItemDaLista.classList.add("card-produto")
        const precoFormatado = produto.preco.toLocaleString("pt-br",{style: "currency", currency:"BRL" })
        novoItemDaLista.innerHTML = `
        <img src="${produto.imagem}">
        <div class="detalhes-produto">
            <h1> ${produto.nome}</h1>
            <span> ${precoFormatado} </span>
        </div>
        <button type="button" class="botao-adicionar" onclick="adicionarProduto(${produto.id})")">Adicionar</button>
        `
        listaProdutos.appendChild(novoItemDaLista)
    })
}

function adicionarProduto(id){
    localStorage.setItem("produto",JSON.stringify(id))
}


const produtos = [
{
"id": 1,
"nome": "Shih tzu",
"preco": 1000,
"imagem": "https://th.bing.com/th/id/R.826eb855d73331cd99cf4dca63514623?rik=7jzsCIKU%2fHFXwQ&riu=http%3a%2f%2fzastavki.com%2fpictures%2foriginals%2f2014%2fAnimals___Dogs_Cutie_shih_tzu_dog_085194_.jpg&ehk=WTdyuDh%2bIHg00EUzsdEETI5gZJjQxyrdgL%2fZeTNWPCU%3d&risl=&pid=ImgRaw&r=0"
},
{
    "id": 2,
    "nome": "Golden Retriever",
    "preco": 1500,
    "imagem": "https://th.bing.com/th/id/R.ff39ff0e4ae2d8603830c2ef4873b0b7?rik=05IdjAKhjOUoQA&pid=ImgRaw&r=0"
  },
  {
    "id": 3,
    "nome": "Bulldog Francês",
    "preco": 2000,
    "imagem": "https://th.bing.com/th/id/R.38916be028648e22b68e93cb81593b82?rik=MoWkwrxQCWm3yA&riu=http%3a%2f%2fwww.dogwalk.com.br%2fblog%2fwp-content%2fuploads%2f2015%2f08%2f3Buldogue_Frances.jpg&ehk=xHTFbdMGZO2bLNnmr6EJ2M6Dzs7E6999kFpsoVb7hQI%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "id": 4,
    "nome": "Poodle",
    "preco": 1200,
    "imagem": "https://th.bing.com/th/id/R.c5788ad5bbf1bb1970069f2826913037?rik=ne77Qzh%2bmeQaOw&pid=ImgRaw&r=0"
  }
]

carregarListaProdutos()