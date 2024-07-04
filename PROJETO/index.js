

import express from 'express';
import connectDatabase from './src/database/db.js';
import userRoute from './src/routes/user.route.js';
import authRoute from "./src/routes/auth.route.js";
import livrosRoute from "./src/routes/livros.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.port || 3000;


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
app.use("/auth", authRoute);
app.use("/livros", livrosRoute);

app.listen(port, () => console.log(`Servidor escutando na porta: ${port}`));