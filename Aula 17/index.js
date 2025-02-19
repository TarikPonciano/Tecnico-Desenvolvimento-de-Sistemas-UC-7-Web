function carregarLocalStorage(){
    const lista = localStorage.getItem("nomes")
    if (lista){
        return JSON.parse(lista)
    }else{
        return []
    }
}
function salvarInformacao(){
    event.preventDefault()
    const campoNome = document.getElementById("campoNome")

    nomes.push(campoNome.value)
    
    localStorage.setItem("nomes", JSON.stringify(nomes))
    construirLista()
}

function construirLista(){
    const listaNomes = document.getElementById("listaNomes")
    listaNomes.innerHTML = nomes
}

const nomes = carregarLocalStorage()

construirLista()