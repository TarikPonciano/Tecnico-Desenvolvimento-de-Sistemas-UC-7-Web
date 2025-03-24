import "./FormularioNovoLivro.css"

function FormularioNovoLivro(){
    //Parte lógica

    //Renderização
    return(
        <div className="container formulario">
            <h1>Cadastro de Livros</h1>
            <form>

                <label>Titulo</label>
                <input name='titulo' type="text"  required/>

                <label>Autor</label>
                <input name='autor' type="text"  required/>

                <label>Ano de Lançamento</label>
                <input name='ano_lancamento' type="number"  required/>

            </form>
        </div>
    )
}

export default FormularioNovoLivro