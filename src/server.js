import http from 'node:http'

import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  // 1. Executa o middleware para processar o corpo da requisição
  await json(req, res)

  // 2. Procura se a rota atual (método + url) existe no nosso arquivo de rotas
  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if (route) {
    // Se a rota existir, extrai os parâmetros (ID) e a Query string (search)
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res)
  }

  // Caso a rota não exista, retorna 404
  return res.writeHead(404).end()
})

server.listen(3333, () => {
  console.log('🚀 Server is running on http://localhost:3333')
})