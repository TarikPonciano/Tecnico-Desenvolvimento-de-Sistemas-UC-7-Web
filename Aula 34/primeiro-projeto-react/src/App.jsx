import './App.css'
import CardLivro from './components/CardLivro/CardLivro.jsx'

function App() {
  const livros = [
    {
      id: 1,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      ano_publicacao: 1899
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      ano_publicacao: 1949
    },
    {
      id: 3,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      ano_publicacao: 1954
    },
    {
      id: 4,
      titulo: "A Revolução dos Bichos",
      autor: "George Orwell",
      ano_publicacao: 1945
    },
    {
      id: 5,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      ano_publicacao: 1943
    },
    {
      id: 6,
      titulo: "Senhor dos Anéis",
      autor: "Tolkien",
      ano_publicacao: 1943
    }

  ]

  return (
    <div className='container'>
    <h1>Acervo de Livros</h1>
    <ul>
    {
      livros.map((livro) => (
        <CardLivro key={livro.id} id={livro.id} titulo={livro.titulo} autor={livro.autor} ano_publicacao={livro.ano_publicacao} />
        
      ))
    }
    </ul>
    </div>
  )
}

export default App
