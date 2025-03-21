import './App.css'

function App() {
  //Código e declaração de variáveis
  const livros = [

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
  ]

  return (
  // Declaração do que será renderizado
  <div className='container'>
    <h1>Acervo de Livros</h1>

  </div>
    
  )
}

export default App
