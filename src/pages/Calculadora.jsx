import { useState } from 'react'
import { perguntas } from '../data/perguntas.js'
import { calcularPegada, classificarPegada } from '../services/calcPegada.js'
import { dicasParaMaiorCategoria } from '../data/dicas.js'
import { salvarPegada } from '../services/storage.js'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function Calculadora() {
  const [indice, setIndice] = useState(0)
  const [respostas, setRespostas] = useState({})
  const [resultado, setResultado] = useState(null)

  const perguntaAtual = perguntas[indice]

  function escolher(valor) {
    const novas = { ...respostas, [perguntaAtual.id]: valor }
    setRespostas(novas)
    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1)
    } else {
      const r = calcularPegada(novas)
      r.classificacao = classificarPegada(r.total)
      r.dicas = dicasParaMaiorCategoria(r.porCategoria)
      setResultado(r)
      salvarPegada(r)
    }
  }

  function reiniciar() {
    setIndice(0)
    setRespostas({})
    setResultado(null)
  }

  if (resultado) {
    return (
      <section>
        <h1>Seu Resultado</h1>
        <p className="total">
          Sua pegada estimada: <strong>{resultado.total} kg CO₂/mês</strong>
        </p>
        <p style={{ color: resultado.classificacao.cor }}>
          Nível: <strong>{resultado.classificacao.nivel}</strong> — {resultado.classificacao.mensagem}
        </p>
        <div className="grafico">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={resultado.porCategoria}>
              <XAxis dataKey="categoria" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="valor" fill="#2e7d32" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <h2>Dicas para {resultado.dicas.categoria}</h2>
        <ul>
          {resultado.dicas.dicas.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
        <button onClick={reiniciar} className="btn">Recomeçar</button>
      </section>
    )
  }

  return (
    <section>
      <h1>Calculadora de Pegada</h1>
      <p>Pergunta {indice + 1} de {perguntas.length}</p>
      <h2>{perguntaAtual.pergunta}</h2>
      <div className="opcoes">
        {perguntaAtual.opcoes.map((op, i) => (
          <button key={i} className="btn btn-opcao" onClick={() => escolher(op.valor)}>
            {op.texto}
          </button>
        ))}
      </div>
    </section>
  )
}