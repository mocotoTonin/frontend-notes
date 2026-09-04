# Frontend Notes

Aplicação Web desenvolvida durante a Aula 05 da disciplina de Frameworks Front-end.

O projeto consiste em um sistema de gerenciamento de notas desenvolvido com React e TypeScript, integrado a uma API REST desenvolvida com Node.js e Express.js.

## Tecnologias

- React
- TypeScript
- TSX
- Vite
- CSS
- Node.js
- Express.js
- API REST
- Git e GitHub
- Vercel

## Funcionalidades

A aplicação permite:

- Criar novas notas;
- Visualizar notas cadastradas;
- Editar notas;
- Excluir notas;
- Consumir dados através de uma API REST;
- Interagir com o backend por meio de requisições HTTP.

## Integração com a API

O frontend realiza requisições para a API hospedada no Render.

**API utilizada:**

https://api-notes-12qm.onrender.com/api/notes

Fluxo da aplicação:

React + TypeScript
        |
        | Requisições HTTP
        v
API REST - Express.js
        |
        v
   data.json
