const express = require('express');
const userRoute = require('./src/routes/user.route');
const app = express();
const port = 3000;
app.use(express.json());

// ROTA
    // Method HTTP - CRUD (create, read, update, delete)
        // GET - Pega uma info
        // POST - cria uma info
        // PUT - Altera toda a info
        // PATCH - Altera parte da info
        // DELETE -0 Apaga a info


// Name - Um identificador da rota
// function (Callback) - Responsável por executar algum comando 

app.use("/user", userRoute);

app.listen(port, () => console.log('Servidor escutando na porta'));