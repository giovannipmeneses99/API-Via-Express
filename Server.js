const express = require('express');
const app = express()
const port = 3000

const books = [ id: 1, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling' },
    { id: 3, title: 'O Código Da Vinci', author: 'Dan Brown' } 
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/turma', (req, res) => {
  res.send('Faça com atenção')
})
app.get('/books', (req, res) => {
  res.json([books

  ])
})

app.listen(port, () => {
  console.log(`Exemplo funcionando na porta${port}`)
})