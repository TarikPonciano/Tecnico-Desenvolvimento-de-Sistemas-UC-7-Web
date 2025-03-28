import { useState } from "react"
import "./FormularioNovoLivro.css"

function FormularioNovoLivro({adicionarLivro}){
    //Parte lógica
    const [novoLivro, setNovoLivro] = useState({
        titulo: "",
        autor: "",
        ano_lancamento: ""
    })

    

    const enviar = (event) => {
        event.preventDefault()

        adicionarLivro(novoLivro)
        
        setNovoLivro({
            titulo: "",
            autor: "",
            ano_lancamento: ""
        })
        
    }

    const mudanca = (event) =>{
        let informacao = event.target.value

        if (event.target.name == "ano_lancamento"){
            if (parseInt(informacao)>10000){
                informacao = 9999
            }
        }

        novoLivro[event.target.name] = informacao
        console.log(novoLivro)
        setNovoLivro({...novoLivro})
    }


    //Renderização
    return(
        <div className="container formulario">
            <h1>Cadastro de Livros</h1>
            <form onSubmit={enviar}>

                <label>Titulo</label>
                <input name='titulo' type="text" value={novoLivro.titulo} onChange={mudanca}  required/>

                <label>Autor</label>
                <input name='autor' type="text" value={novoLivro.autor} onChange={mudanca} required/>

                <label>Ano de Lançamento</label>
                <input name='ano_lancamento' type="number" value={novoLivro.ano_lancamento} onChange={mudanca} required/>

                <button type="submit">✔ Cadastrar</button>

            </form>
        </div>
    )
}

export default FormularioNovoLivro