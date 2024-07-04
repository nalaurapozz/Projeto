import bcrypt from 'bcrypt';
import { loginService, geraToken } from '../services/auth.service.js'
import User from '../models/User.js';
import { response } from 'express';


const login = async (req, res) => {
    const { login, senha } = req.body;

    try {
        const user = await loginService(login);



        const senhaValid = bcrypt.compareSync(senha, user.senha);

        if (!senhaValid || !user) {
            return res.status(404).send({ message: "Senha ou usuário incorretos!" });
        }

        const token = geraToken(user.id);
        res.send({token});
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export { login };