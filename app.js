const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

app.get('/', (req, resp) => {
  resp.send('Index')
})

//prueba

app.get('/productos', (req, resp) => {
  resp.json([{
    product: 1,
    name: 'Monitor',
    stock: 60,
    marca: 'LG'
  },
  {
    product: 2,
    name: 'Case',
    stock: 30,
    marca: 'MAster'
  },
  {
    product: 3,
    name: 'Mouse',
    stock: 20,
    marca: 'Microsoft'
  },
  {
    product: 4,
    name: 'Teclado',
    stock: 50,
    marca: 'Lenovo'
  }
]);
})

app.get('/clientes', (req, resp) => {
  resp.json([{
    Cliente: 1,
    name: 'John',
    lastname: 'males',
    dni: 77153538
  },
  {
    Cliente: 2,
    name: 'Juan',
    lastname: 'Marquez',
    dni: 75124785
  },
  {
    Cliente: 3,
    name: 'Daniel',
    lastname: 'Roque',
    dni: 7715454
  }
]);
})

server.listen(5000,() => {
    console.log('Servidor corriendo en http://localhost:5000')
})