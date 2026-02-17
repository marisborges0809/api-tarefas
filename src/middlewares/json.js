export async function json(req, res) {
  const buffers = []

  // Coleta os pedaços (chunks) de dados da requisição
  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    // Concatena os buffers e transforma em string JSON, depois em objeto
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    // Se falhar (corpo vazio), define o body como null
    req.body = null
  }

  // Define que a resposta padrão da API será sempre JSON
  res.setHeader('Content-type', 'application/json')
}