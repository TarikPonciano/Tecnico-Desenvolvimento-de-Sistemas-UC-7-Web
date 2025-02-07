function fazerCalculo(){
    const campoNumero1 = document.getElementById("campoNumero1");
    const campoNumero2 = document.getElementById("campoNumero2");
    const numero1 = parseFloat(campoNumero1.value);
    const numero2 = parseFloat(campoNumero2.value);

    // Verifique se ambos os números foram inseridos. Se ambos os números estão corretos, exibir resultado do cálculo. Se algum número faltou, exibir "Preencha ambos os números"
    if (!numero1 || !numero2){
        alert("Preencha os campos corretamente!")
        return
    }
    const resultado = numero1 + numero2
    alert(`Resultado da operação: ${resultado}`)

    // Limpe os campos após exibir a mensagem

    campoNumero1.value = ""
    campoNumero2.value = ""
}
