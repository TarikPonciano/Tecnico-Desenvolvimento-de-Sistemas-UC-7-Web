function cadastrarFuncionario(event){
    event.preventDefault()
    const campoNome = document.getElementById("campoNome") 
    const campoCpf = document.getElementById("campoCpf") 
    const campoData = document.getElementById("campoData") 
    const selecaoCargo = document.getElementById("selecaoCargo") 
    const selecaoEstado = document.getElementById("selecaoEstados") 
    const radioEstadoCivil = document.querySelector("input[type='radio']:checked")
    
    
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
        <p class="vermelho">CPF: ${campoCpf.value}</p> \n
        Data: ${campoData.value} \n
        Cargo: ${selecaoCargo.value} \n
        Estado: ${selecaoEstado.value} \n
        Estado Civil: ${radioEstadoCivil.value}`
    container.appendChild(novoFuncionario)
    
    document.getElementById("formularioNovoFuncionario").reset()

}


function realizarLogin(){
    const campoUsuario = document.getElementById("campoUsuario")

    const campoSenha = document.getElementById("campoSenha")

    if(!campoUsuario.value || !campoSenha.value){
        alert("Você deve digitar usuário e senha!")
        return
    }

    if(campoUsuario.value != "admin"){
        alert("Usuário não encontrado!")
        return
    }

    if(campoSenha.value != "123456"){
        alert("Senha incorreta!")
        return
    }

    alert("Seja bem vindo, admin! Login efetuado com sucesso.")

    window.location.href = "cadastroForm.html"


}