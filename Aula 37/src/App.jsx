import { useState } from 'react'
import './App.css'
import FormularioNovoLivro from './views/FormularioNovoLivro/FormularioNovoLivro'
import AcervoLivros from './views/AcervoLivros/AcervoLivros'

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

  const adicionarLivro = (novoLivro) => {
    // Criar um campo id na variável novoLivro
    const novoLivroAjustado = {id: livros[livros.length - 1].id + 1 ,...novoLivro}
    // Criar uma lista que contenha os livros antigos e o novoLivro
    const listaLivrosAtualizada = [...livros, novoLivroAjustado]
    // Guardar as informações da nova lista usando o setLivros
    setLivros(listaLivrosAtualizada)

    //setLivros([...livros, {id: livros[livros.length - 1].id + 1, ...novoLivro }])
  }


  return (
    // Declaração do que será renderizado
    <>
      <FormularioNovoLivro adicionarLivro={adicionarLivro}/>
      <AcervoLivros livros={livros} removerLivro={removerLivro} />
    </>
  )
}

export default App