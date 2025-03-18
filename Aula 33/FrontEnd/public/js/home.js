document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:3000/api/itens")
    const dados = await response.json()

    const corpoDoHtml = document.querySelector("body")

    dados.forEach(livro => {
        const novoElementoHtml = document.createElement("h1")
        novoElementoHtml.innerHTML = `
        Titulo: ${livro.titulo}
        `
        corpoDoHtml.appendChild(novoElementoHtml)
    });

})