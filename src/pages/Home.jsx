import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home">
      <h1>Bem-vindo ao EcoPegada 🌍</h1>
      <p className="lead">
        Descubra sua pegada de carbono, receba dicas personalizadas e cultive hábitos sustentáveis.
      </p>
      <div className="grid-2">
        <Link to="/calculadora" className="card">
          <h2>📊 Calculadora</h2>
          <p>Responda 4 perguntas e descubra sua pegada.</p>
        </Link>
        <Link to="/diario" className="card">
          <h2>✅ Diário Verde</h2>
          <p>Marque hábitos sustentáveis e mantenha sua sequência.</p>
        </Link>
      </div>
    </section>
  )
}