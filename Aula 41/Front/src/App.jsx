import { useState } from 'react'
import './App.css'
import Login from './views/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard/Dashboard'
import RotaProtegida from "./components/RotaProtegida"

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />


        <Route element={<RotaProtegida />}>

          <Route path="/dashboard" element={<Dashboard />} />

        </Route>

        <Route path="*" element={<h1>404 Página Não encontrada</h1>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
