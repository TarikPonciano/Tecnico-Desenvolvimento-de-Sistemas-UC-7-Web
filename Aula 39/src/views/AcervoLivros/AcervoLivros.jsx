import { useEffect, useState } from "react"
import CardLivro from "../../components/CardLivro/CardLivro"
import "./AcervoLivros.css"

function AcervoLivros() {
    const [livros, setLivros] = useState([])
    const [atualizar, setAtualizar] = useState(false)

    useEffect(() => {
        const carregarLivros = async () =>{
            const response = await fetch("http://localhost:5000/livros")
            const dados = await response.json()
            setLivros(dados)
        }

        carregarLivros()
    }, [atualizar])
    return (
        <div className='container' style={{ color: 'Gray' }}>
            <h1>Acervo de Livros</h1>
            {livros.length != 0 ? 
            <ul>
                {
                    livros.map((livro) => (
                        <CardLivro key={livro.id} id={livro.id} titulo={livro.titulo} autor={livro.autor} ano_lancamento={livro.ano_lancamento} atualizar={setAtualizar} />
                    )
                    )
                }
            </ul> : <h1>LIVROS NÃO CARREGADOS</h1>}
            
        </div>
    )
}

export default AcervoLivros