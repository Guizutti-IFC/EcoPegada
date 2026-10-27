const KEY = 'ecopegada:dados'

export function carregarDados() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : { pegada: null, habitos: {}, streak: 0 }
  } catch {
    return { pegada: null, habitos: {}, streak: 0 }
  }
}

export function salvarDados(dados) {
  localStorage.setItem(KEY, JSON.stringify(dados))
}

export function salvarPegada(pegada) {
  const dados = carregarDados()
  dados.pegada = pegada
  salvarDados(dados)
}