const express = require('express');
const connectDatabase = require('./src/database/db');
const userRoute = require('./src/routes/user.route');

const app = express();
const port = 3000;


connectDatabase();
// ROTA
    // Method HTTP - CRUD (create, read, update, delete)
        // GET - Pega uma info
        // POST - cria uma info
        // PUT - Altera toda a info
        // PATCH - Altera parte da info
        // DELETE -0 Apaga a info


// Name - Um identificador da rota
// function (Callback) - Responsável por executar algum comando 
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000, () => console.log('Servidor escutando na porta 3000'));