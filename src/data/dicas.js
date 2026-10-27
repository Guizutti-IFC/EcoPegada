export const dicasPorCategoria = {
  Transporte: [
    'Prefira caminhar ou pedalar em trajetos curtos.',
    'Use transporte público sempre que possível.',
    'Considere caronas compartilhadas.',
  ],
  Alimentacao: [
    'Reduza o consumo de carne vermelha para 1–2x por semana.',
    'Prefira alimentos locais e da estação.',
    'Evite desperdício de comida.',
  ],
  Energia: [
    'Tome banhos mais curtos.',
    'Desligue aparelhos da tomada quando não usar.',
    'Troque lâmpadas por LED.',
  ],
  Consumo: [
    'Repare em vez de descartar.',
    'Compre roupas em brechós.',
    'Destine eletrônicos para pontos de coleta.',
  ],
}

export function dicasParaMaiorCategoria(porCategoria) {
  const maior = [...porCategoria].sort((a, b) => b.valor - a.valor)[0]
  return { categoria: maior.categoria, dicas: dicasPorCategoria[maior.categoria] || [] }
}