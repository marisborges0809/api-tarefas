import { parse } from 'csv-parse'
import fs from 'node:fs'

// Define o caminho do arquivo CSV
const csvPath = new URL('./tasks.csv', import.meta.url)

// Cria a stream de leitura
const stream = fs.createReadStream(csvPath)

// Configura o parse do CSV
const csvParse = parse({
  delimiter: ',',
  skip_empty_lines: true,
  from_line: 2 // Pula o cabeçalho (title, description)
})

async function run() {
  // Conecta a leitura do arquivo ao parser do CSV
  const linesParse = stream.pipe(csvParse)

  console.log('--- Iniciando importação ---')

  for await (const line of linesParse) {
    const [title, description] = line

    // Faz a chamada POST para a sua API
    await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      })
    })

    console.log(`✅ Importada: ${title}`)
  }

  console.log('--- Importação finalizada ---')
}

run()