import { useState } from 'react'
import './App.css'
import CardLivro from './components/CardLivro/CardLivro'

function App() {
  //Código e declaração de variáveis  
  const [livros, setLivros] = useState([

    {
      id: 1,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      ano_lancamento: 1899
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      ano_lancamento: 1949
    },
    {
      id: 3,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      ano_lancamento: 1954
    },
    {
      id: 4,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      ano_lancamento: 1943
    },
    {
      id: 5,
      titulo: "Cem Anos de Solidão",
      autor: "Gabriel García Márquez",
      ano_lancamento: 1967
    },
    {
      id: 6,
      titulo: "A Revolução dos Bichos",
      autor: "George Orwell",
      ano_lancamento: 1945
    },
    {
      id: 7,
      titulo: "Orgulho e Preconceito",
      autor: "Jane Austen",
      ano_lancamento: 1813
    },
    {
      id: 8,
      titulo: "O Alquimista",
      autor: "Paulo Coelho",
      ano_lancamento: 1988
    },
    {
      id: 9,
      titulo: "Moby Dick",
      autor: "Herman Melville",
      ano_lancamento: 1851
    },
    {
      id: 10,
      titulo: "A Divina Comédia",
      autor: "Dante Alighieri",
      ano_lancamento: 1320
    }
  ])

  const removerLivro = (idLivro) => {
    const livrosAtualizado = livros.filter((livro) => livro.id != idLivro)
    setLivros(livrosAtualizado)
    alert(`Livro ${idLivro} removido!`)
  }



  return (
    // Declaração do que será renderizado
    <>
      <div className='container'></div>
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
    </>
  )
}

export default App
