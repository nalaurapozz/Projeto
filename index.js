const express = require('express')
const app = express()

// ROTA
    // Method HTTP - CRUD (create, read, update, delete)
        // GET - Pega uma info
        // POST - cria uma info
        // PUT - Altera toda a info
        // PATH - Altera parte da info
        // DELETE -0 Apaga a info


// Name - Um identificador da rota
// function (Callback) - Responsável por executar algum comando 

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)