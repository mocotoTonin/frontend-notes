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

```text
React + TypeScript
        |
        | Requisições HTTP
        v
API REST - Express.js
        |
        v
   data.json
```
Projeto

O frontend foi desenvolvido utilizando React com TypeScript e TSX, permitindo a criação de componentes e organização da interface da aplicação.

Deploy

A aplicação foi publicada utilizando a Vercel.

Aplicação online:

https://frontend-notes-eosin.vercel.app/

Repositório

GitHub:

https://github.com/mocotoTonin/frontend-notes

API

Repositório do Backend:

https://github.com/mocotoTonin/api-notes

API online:

https://api-notes-12qm.onrender.com/api/notes

Objetivo da Atividade

O objetivo foi desenvolver uma aplicação React capaz de consumir uma API REST e realizar operações de criação, leitura, atualização e exclusão de dados.

A atividade permitiu praticar a integração entre Front-end e Back-end, além do uso de TypeScript, APIs REST, GitHub e deploy utilizando a Vercel.
