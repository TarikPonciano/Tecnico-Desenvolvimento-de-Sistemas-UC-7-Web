import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import './App.css'
import FormularioNovoLivro from './views/FormularioNovoLivro/FormularioNovoLivro'
import AcervoLivros from './views/AcervoLivros/AcervoLivros'
import FormularioAtualizarLivro from './views/FormularioAtualizarLivro/FormularioAtualizarLivro'

function App() {
  //Código e declaração de variáveis  

  const navigate = useNavigate()



  return (
    // Declaração do que será renderizado
    
    <>
      <nav className='menu'>
        <div>LOGO</div>
        <div>
          <Link to="/acervo">Acervo de Livros</Link>
          <Link to="/cadastro">Cadastro de Livros</Link>
        </div>
      </nav>

      <Routes>

        <Route path='/acervo' element={<AcervoLivros/>} />

        <Route path='/cadastro' element={<FormularioNovoLivro/>} />

        <Route path='/editar/:id' element={<FormularioAtualizarLivro/>} />

        <Route path='*' element={<h1>404 Página não encontrada</h1>} />

      </Routes>
    </>
  )
}

export default App