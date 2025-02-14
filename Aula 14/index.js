function cadastrarFuncionario(event){
    event.preventDefault()
    const campoNome = document.getElementById("campoNome") 
    const campoCpf = document.getElementById("campoCpf") 
    const campoData = document.getElementById("campoData") 
    const selecaoCargo = document.getElementById("selecaoCargo") 
    const selecaoEstado = document.getElementById("selecaoEstados") 
    const radioEstadoCivil = document.querySelector("input[type='radio']:checked")
    
    if (!campoCpf.value){
        alert("CPF Não inserido")
        return
    }
    
    alert(`
        Nome: ${campoNome.value} \n
        CPF: ${campoCpf.value} \n
        Data: ${campoData.value} \n
        Cargo: ${selecaoCargo.value} \n
        Estado: ${selecaoEstado.value} \n
        Estado Civil: ${radioEstadoCivil.value}`)

    const container = document.querySelector(".container")
    const novoFuncionario = document.createElement("div")
    novoFuncionario.innerHTML = `
        <p>Nome: ${campoNome.value}</p> \n
        CPF: ${campoCpf.value} \n
        Data: ${campoData.value} \n
        Cargo: ${selecaoCargo.value} \n
        Estado: ${selecaoEstado.value} \n
        Estado Civil: ${radioEstadoCivil.value}`
    container.appendChild(novoFuncionario)
    
    document.getElementById("formularioNovoFuncionario").reset()


    
}