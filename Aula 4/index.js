function boasVindas(){
    const nome = document.getElementById('campoNome').value
    const animal = document.getElementById('selecaoPets').value
    if (!nome || animal == "escolha"){
        alert("Preencha o formulário corretamente!")
        return
    }
    alert(`SAIA do meu Site ${nome}`);

    if (animal == "gato"){
        alert("MIAAAAAAUUUU");
    } else if (animal == "cachorro"){
        alert("AUUUUUUU lobinho");
    } else {
        alert("...");
    }
    document.getElementById("campoNome").value = '';
    document.getElementById("selecaoPets").selectedIndex = 0;;
    
}