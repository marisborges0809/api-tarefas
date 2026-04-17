import { Router } from 'express'
import { Database } from './database.js'

const router = Router()
const database = new Database()

// GET
router.get('/tasks', (req, res) => {
  const tasks = database.select('tasks')
  return res.json(tasks)
})

// POST
router.post('/tasks', (req, res) => {
  const { title } = req.body

  const task = {
    id: Date.now().toString(),
    title,
    completed: false,
    created_at: new Date()
  }

  database.insert('tasks', task)

  return res.status(201).json(task)
})

// PUT
router.put('/tasks/:id', (req, res) => {
  const { id } = req.params
  const { title } = req.body

  database.update('tasks', id, { title })

  return res.send()
})

// DELETE
router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params

  database.delete('tasks', id)

  return res.status(204).send()
})

// PATCH (seu diferencial)
router.patch('/tasks/:id/complete', (req, res) => {
  const { id } = req.params

  const tasks = database.select('tasks')
  const task = tasks.find(t => t.id === id)

  if (!task) {
    return res.status(404).json({ message: 'Tarefa não encontrada' })
  }

  database.update('tasks', id, {
    completed: !task.completed
  })

  return res.send()
})

export { router }