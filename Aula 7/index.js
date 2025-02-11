function cadastrarTarefa(event){
    event.preventDefault()
    const nomeTarefa = document.getElementById("campoNomeTarefa").value
    const descricaoTarefa = document.getElementById("campoDescricaoTarefa").value
    const autorTarefa = document.getElementById("campoAutorTarefa").value
    const dataTarefa = document.getElementById("campoDataTarefa").value
    
    // Solução 2 - Moderna
    const situacaoFinal = document.querySelector(".radio-group input[type='radio']:checked").value

    // Solução 1
    const listaRadio = document.getElementsByName("selecaoTarefa")
    let situacao = ""

    for (let radio of listaRadio){
        if (radio.checked){
            situacao = radio.value
        }
    }
    
    alert(`Tarefa cadastrada com sucesso! \n Nome: ${nomeTarefa} \n Descrição: ${descricaoTarefa} \n Autor: ${autorTarefa} \n Data: ${dataTarefa} \n Situação: ${situacaoFinal}`)
    
    
}