// Open-Meteo Air Quality API — gratuita, sem chave
export async function buscarQualidadeAr(lat = -23.55, lon = -46.63) {
  const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=pm10,pm2_5`
  try {
    const resp = await fetch(url)
    if (!resp.ok) throw new Error('Falha na API')
    const dados = await resp.json()
    return {
      pm10: dados.current?.pm10,
      pm25: dados.current?.pm2_5,
      atualizado: dados.current?.time,
    }
  } catch {
    return null
  }
}