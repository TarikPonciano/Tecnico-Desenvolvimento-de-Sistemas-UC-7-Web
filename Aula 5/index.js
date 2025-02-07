function fazerCalculo(){
    var numero1 = parseFloat(document.getElementById("campoNumero1").value);
    var numero2 = parseFloat(document.getElementById("campoNumero2").value);

    // Verifique se ambos os números foram inseridos. Se ambos os números estão corretos, exibir resultado do cálculo. Se algum número faltou, exibir "Preencha ambos os números"
    if (!numero1 || !numero2){
        alert("Preencha os campos corretamente!")
        return
    }
    var resultado = numero1 + numero2
    alert(`Resultado da operação: ${resultado}`)

    // Limpe os campos após exibir a mensagem
    
}
