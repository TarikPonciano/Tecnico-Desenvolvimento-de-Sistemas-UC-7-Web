import CardLivro from "../../components/CardLivro/CardLivro"
import "./AcervoLivros.css"

function AcervoLivros({ livros, removerLivro }) {
    return (
        <div className='container' style={{ color: 'Gray' }}>
            <h1>Acervo de Livros</h1>
            <ul>
                {
                    livros.map((livro) => (
                        <CardLivro key={livro.id} id={livro.id} titulo={livro.titulo} autor={livro.autor} ano_lancamento={livro.ano_lancamento} removerLivro={removerLivro} />
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default AcervoLivros