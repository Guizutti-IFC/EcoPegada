import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Calculadora from './pages/Calculadora.jsx'
import Diario from './pages/Diario.jsx'
import Sobre from './pages/Sobre.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/diario" element={<Diario />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>EcoPegada © 2026 — Projeto de Desenvolvimento Web</p>
      </footer>
    </>
  )
}