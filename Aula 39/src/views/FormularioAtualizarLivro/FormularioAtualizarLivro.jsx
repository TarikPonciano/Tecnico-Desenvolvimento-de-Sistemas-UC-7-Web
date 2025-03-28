import { useEffect, useState } from "react"
import "./FormularioAtualizarLivro.css"
import { useParams } from "react-router-dom"

function FormularioAtualizarLivro(){
    //Parte lógica
    const { id } = useParams()

    const [novoLivro, setNovoLivro] = useState({
        id: "",
        titulo: "",
        autor: "",
        ano_lancamento: ""
    })

    useEffect(() => {
        const carregarLivro = async () => {
            try {
            const response = await fetch(`http://localhost:5000/livros/${id}`)

            if (response.status == 404){
                setNovoLivro({
                    id: "",
                    titulo: "",
                    autor: "",
                    ano_lancamento: ""
                })
                return
            }

            const dados = await response.json()
            setNovoLivro(dados)
        }
        catch{
            setNovoLivro({
                id: "",
                titulo: "",
                autor: "",
                ano_lancamento: ""
            })
        }
        }
        carregarLivro()
    },[])

    const atualizarLivro = async (livroAtualizado) => {
        const response = await fetch(`http://localhost:5000/livros/${livroAtualizado.id}`, {method:"PUT", headers: {"CONTENT-TYPE":"application/json"}, body: JSON.stringify(livroAtualizado)})
        alert(response.statusText)
    }

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
        novoLivro.id != "" ?
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
        </div>: <h1>LIVRO NÃO ENCONTRADO</h1>
    )
}

export default FormularioAtualizarLivro