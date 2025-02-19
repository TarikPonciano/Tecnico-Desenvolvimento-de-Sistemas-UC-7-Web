function carregarLocalStorage(){
    const lista = localStorage.getItem("nomes")
    if (lista){
        return JSON.parse(lista)
    }else{
        return []
    }
}
function salvarInformacao(event){
    event.preventDefault()
    const campoNome = document.getElementById("campoNome")
    const nomes = carregarLocalStorage()
    nomes.push(campoNome.value)
    
    localStorage.setItem("nomes", JSON.stringify(nomes))
    construirLista()
}

function construirLista(){
    const listaNomes = document.getElementById("listaNomes")
    const caixa = document.createElement("div")
    const nomes = carregarLocalStorage()
    nomes.forEach(nome => {
        const novoNome = document.createElement("h1")
        novoNome.textContent = nome
        caixa.appendChild(novoNome)
    });
    listaNomes.innerHTML = caixa.innerHTML
}


construirLista()