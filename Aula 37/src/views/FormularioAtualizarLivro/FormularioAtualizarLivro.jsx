import { useState } from "react"
import "./FormularioAtualizarLivro.css"
import { useParams } from "react-router-dom"

function FormularioAtualizarLivro({livros, atualizarLivro}){
    //Parte lógica
    const { id } = useParams()
    const livro = livros.find((l) => l.id == id)

    const [novoLivro, setNovoLivro] = useState({
        id: livro.id,
        titulo: livro.titulo,
        autor: livro.autor,
        ano_lancamento: livro.ano_lancamento
    })

    

    const enviar = (event) => {
        event.preventDefault()
        console.log("Enviado", novoLivro)
        atualizarLivro(novoLivro)
        
        setNovoLivro({
            id: "",
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
            <h1>Editar Livro {novoLivro.id}</h1>
            <form onSubmit={enviar}>

                <label>Titulo</label>
                <input name='titulo' type="text" value={novoLivro.titulo} onChange={mudanca}  required/>

                <label>Autor</label>
                <input name='autor' type="text" value={novoLivro.autor} onChange={mudanca} required/>

                <label>Ano de Lançamento</label>
                <input name='ano_lancamento' type="number" value={novoLivro.ano_lancamento} onChange={mudanca} required/>

                <button type="submit">✔ Editar</button>

            </form>
        </div>
    )
}

export default FormularioAtualizarLivro