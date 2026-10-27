// Cada opção tem um fator de emissão estimado em kg de CO2/mês
export const perguntas = [
  {
    id: 'transporte',
    categoria: 'Transporte',
    pergunta: 'Como você se locomove na maior parte da semana?',
    opcoes: [
      { texto: 'A pé ou de bicicleta', valor: 0 },
      { texto: 'Transporte público', valor: 30 },
      { texto: 'Carro (compartilhado)', valor: 90 },
      { texto: 'Carro (sozinho)', valor: 160 },
    ],
  },
  {
    id: 'alimentacao',
    categoria: 'Alimentação',
    pergunta: 'Qual é a sua frequência de consumo de carne vermelha?',
    opcoes: [
      { texto: 'Nunca / raramente', valor: 20 },
      { texto: '1 a 2 vezes por semana', valor: 50 },
      { texto: '3 a 5 vezes por semana', valor: 80 },
      { texto: 'Todos os dias', valor: 120 },
    ],
  },
  {
    id: 'energia',
    categoria: 'Energia',
    pergunta: 'Quantos banhos longos (acima de 10 min) você toma por semana?',
    opcoes: [
      { texto: 'Nenhum', valor: 0 },
      { texto: '1 a 3', valor: 15 },
      { texto: '4 a 7', valor: 30 },
      { texto: 'Mais de 7', valor: 50 },
    ],
  },
  {
    id: 'consumo',
    categoria: 'Consumo',
    pergunta: 'Com que frequência você descarta eletrônicos ou roupas em bom estado?',
    opcoes: [
      { texto: 'Quase nunca', valor: 0 },
      { texto: 'Às vezes', valor: 20 },
      { texto: 'Com frequência', valor: 45 },
      { texto: 'Muito frequentemente', valor: 70 },
    ],
  },
]