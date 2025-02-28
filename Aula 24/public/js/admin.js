async function addItem(event){
    event.preventDefault()
    const campoModelo = document.getElementById("campoModelo")
    const campoMarca = document.getElementById("campoMarca")
    const campoPreco = document.getElementById("campoPreco")

    const novoCelular = {
        "model": campoModelo.value,
        "brand": campoMarca.value,
        "price": campoPreco.value
    }

    const response = await fetch("/api/items", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoCelular)
    })

    if (response.ok){
        alert("Item adicionado com sucesso!")
    }else{
        alert("Falha ao adicionar o item!")
    }
}