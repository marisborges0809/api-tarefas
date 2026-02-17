import fs from 'node:fs/promises'

// Define o caminho onde o arquivo JSON será salvo
// O URL serve para garantir que o caminho seja relativo ao arquivo database.js
const databasePath = new URL('../db.json', import.meta.url)

export class Database {
  // # indica que a propriedade é privada, protegendo os dados
  #database = {}

  constructor() {
    // Ao instanciar a classe, tentamos ler o arquivo existente
    fs.readFile(databasePath, 'utf8')
      .then(data => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        // Se o arquivo não existir, criamos ele vazio
        this.#persist()
      })
  }

  // Método auxiliar para salvar os dados no arquivo db.json
  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database, null, 2))
  }

  // --- MÉTODOS CRUD ---

  // Retorna os dados de uma tabela (ex: 'tasks')
  select(table, search) {
    let data = this.#database[table] ?? []

    if (search) {
      data = data.filter(row => {
        // Verifica se o título ou descrição contém o termo de busca (case insensitive)
        return Object.values(row).some(value => {
          if (typeof value !== 'string') return false
          return value.toLowerCase().includes(search.toLowerCase())
        })
      })
    }

    return data
  }

  // Insere um novo registro
  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()
    return data
  }

  // Atualiza um registro existente pelo ID
  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      // Preserva os dados antigos e sobrescreve apenas o que veio no 'data'
      const currentTask = this.#database[table][rowIndex]
      this.#database[table][rowIndex] = { ...currentTask, ...data, id }
      this.#persist()
    } else {
      throw new Error('Record not found')
    }
  }

  // Remove um registro pelo ID
  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
    } else {
      throw new Error('Record not found')
    }
  }
}