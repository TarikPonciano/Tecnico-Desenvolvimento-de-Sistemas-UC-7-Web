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

    nomes.push(campoNome.value)
    
    localStorage.setItem("nomes", JSON.stringify(nomes))
    construirLista()
}

function construirLista(){
    const listaNomes = document.getElementById("listaNomes")
    nomes.forEach(nome => {
        const novoNome = document.createElement("h1")
        novoNome.textContent = nome
        listaNomes.appendChild(novoNome)
    });
    
}

const nomes = carregarLocalStorage()

construirLista()