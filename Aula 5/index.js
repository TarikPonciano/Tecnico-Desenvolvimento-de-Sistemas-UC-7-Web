function fazerCalculo(){
    const campoNumero1 = document.getElementById("campoNumero1");
    const campoNumero2 = document.getElementById("campoNumero2");
    const campoOperacao = document.getElementById("operacaoSelecionada")
    const numero1 = parseFloat(campoNumero1.value);
    const numero2 = parseFloat(campoNumero2.value);
    const operacao = campoOperacao.value

    // Verifique se ambos os números foram inseridos. Se ambos os números estão corretos, exibir resultado do cálculo. Se algum número faltou, exibir "Preencha ambos os números"
    if (!numero1 || !numero2 || operacao == "escolha" ){
        alert("Preencha os campos corretamente!")
        return
    }
    let resultado = 0
    if (operacao == "soma"){
        resultado = numero1 + numero2
    } else if (operacao == "subtracao"){
        resultado = numero1 - numero2
    } else if (operacao == "multiplicacao"){
        resultado = numero1 * numero2
    } else if (operacao == "divisao"){
        resultado = numero1 / numero2
    }

    alert(`Resultado da operação de ${operacao}: ${resultado}`)

    // Limpe os campos após exibir a mensagem

    campoNumero1.value = ""
    campoNumero2.value = ""
    campoOperacao.selectedIndex = 0
}
