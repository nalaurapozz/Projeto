

import express from 'express';
import connectDatabase from './database/db.js';
import userRoute from './routes/user.route.js';
import authRoute from "./routes/auth.route.js";
import livrosRoute from "./routes/livros.route.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();



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