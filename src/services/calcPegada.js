export function calcularPegada(respostas) {
  // respostas: objeto { transporte: valor, alimentacao: valor, ... }
  const categorias = ['transporte', 'alimentacao', 'energia', 'consumo']
  const porCategoria = categorias.map((cat) => ({
    categoria: cat.charAt(0).toUpperCase() + cat.slice(1),
    valor: respostas[cat] || 0,
  }))

  const total = porCategoria.reduce((soma, item) => soma + item.valor, 0)
  return { total, porCategoria }
}

export function classificarPegada(total) {
  if (total <= 100) return { nivel: 'Baixa', cor: '#2e7d32', mensagem: 'Excelente! Sua pegada está abaixo da média.' }
  if (total <= 250) return { nivel: 'Média', cor: '#f9a825', mensagem: 'Bom caminho! Há espaço para melhorar.' }
  return { nivel: 'Alta', cor: '#c62828', mensagem: 'Atenção! Sua pegada está acima do ideal.' }
}