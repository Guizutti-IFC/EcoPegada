import { useEffect, useState } from 'react'
import { carregarDados, salvarDados } from '../services/storage.js'

const HABITOS = [
  'Economizei água',
  'Reciclei resíduos',
  'Usei transporte sustentável',
  'Evitei desperdício de comida',
  'Desliguei aparelhos da tomada',
]

export default function Diario() {
  const [dados, setDados] = useState({ habitos: {}, streak: 0 })

  useEffect(() => {
    setDados(carregarDados())
  }, [])

  const hoje = new Date().toISOString().slice(0, 10)
  const marcadosHoje = dados.habitos[hoje] || []

  function alternarHabito(habito) {
    const atuais = marcadosHoje.includes(habito)
      ? marcadosHoje.filter((h) => h !== habito)
      : [...marcadosHoje, habito]
    const novos = { ...dados, habitos: { ...dados.habitos, [hoje]: atuais } }
    setDados(novos)
    salvarDados(novos)
  }

  return (
    <section>
      <h1>Diário Verde</h1>
      <p>Marque seus hábitos sustentáveis de hoje ({hoje}).</p>
      <ul className="lista-habitos">
        {HABITOS.map((h) => (
          <li key={h}>
            <label>
              <input
                type="checkbox"
                checked={marcadosHoje.includes(h)}
                onChange={() => alternarHabito(h)}
              />
              {h}
            </label>
          </li>
        ))}
      </ul>
      <p><strong>{marcadosHoje.length}</strong> de {HABITOS.length} hábitos hoje.</p>
    </section>
  )
}