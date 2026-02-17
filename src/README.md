# 🚀 Task Manager API - Node.js

Uma API robusta para gerenciamento de tarefas (CRUD) desenvolvida em Node.js puro, sem frameworks externos, focada em praticidade e performance. Este projeto foi desenvolvido como um desafio técnico para aplicar conceitos de HTTP, Streams, Buffers e manipulação de arquivos no Node.js.

## 🛠️ Funcionalidades

- [x] **CRUD de Tarefas**: Criação, listagem, atualização e remoção.
- [x] **Filtros Inteligentes**: Busca por título ou descrição através de Query Parameters.
- [x] **Status de Conclusão**: Rota específica (PATCH) para marcar/desmarcar tarefas concluídas.
- [x] **Importação em Massa**: Script dedicado para ler arquivos CSV e popular o banco de dados via Streams.
- [x] **Persistência Local**: Banco de dados estruturado em arquivo JSON.

## 📁 Estrutura do Projeto

- `src/server.js`: Ponto de entrada e lógica de roteamento.
- `src/database.js`: Sistema de persistência em disco.
- `src/routes.js`: Definição das rotas e regras de negócio.
- `src/middlewares/`: Tratamento de dados (ex: conversão de JSON).
- `src/utils/`: Utilitários para regex e extração de parâmetros.
- `import-csv.js`: Script de integração para importação de dados.

## 🚀 Como executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (Versão 18 ou superior recomendada)

### Instalação e Execução
1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)