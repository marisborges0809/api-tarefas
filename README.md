# 🚀 API de Tarefas (Node.js + Express)

API RESTful desenvolvida para gerenciamento de tarefas, com operações CRUD completas e persistência de dados em arquivo JSON.

## 🧠 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos de backend utilizando Node.js e Express, incluindo:

- Criação de servidor HTTP
- Definição de rotas REST
- Manipulação de dados
- Estruturação de aplicação backend

Inicialmente, a aplicação foi construída utilizando Node.js puro, permitindo compreender o funcionamento interno de conceitos como roteamento e middleware. Posteriormente, foi adaptada para Express.

---

## ⚙️ Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- JSON (persistência de dados)

---

## 🔥 Funcionalidades

- Criar tarefas
- Listar tarefas
- Atualizar tarefas
- Deletar tarefas
- Marcar tarefa como concluída

---

## 📌 Rotas da API

| Método | Rota | Descrição |
|--------|------|----------|
| GET | /tasks | Lista todas as tarefas |
| POST | /tasks | Cria uma nova tarefa |
| PUT | /tasks/:id | Atualiza uma tarefa |
| DELETE | /tasks/:id | Remove uma tarefa |
| PATCH | /tasks/:id/complete | Marca como concluída |

---

## ▶️ Como executar o projeto

```bash
# instalar dependências
npm install

# rodar servidor
node src/server.js