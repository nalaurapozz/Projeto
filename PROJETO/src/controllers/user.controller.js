import userService from '../services/user.service.js';
import mongoose from 'mongoose';


const create = async (req, res) => {
    
        const { nome, senha, login, tipo } = req.body;


        if (!nome || !senha || !login) {
            res.status(400).send({ message: 'Nome, senha e login são obrigatórios.' });
        }
        const user = await userService.createService(req.body);

        res.status(201).send({
            message: "Usuário criado!",
            user: {
                id: user._id,
                nome,
                login,
                tipo,
            },

        });
    
};

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService();

        if (users.length === 0) {
            return res.status(400).send({ message: "Não há usuários cadastrados!" })
        }
        res.send(users)
    } catch (err) {
        console.log(500).send({ message: err.message })
    };
};

const findById = async (req, res) => {
    try {
        const id = req.paramn.id;
        const user = await userService.findByIdService(id);
        res.send(user)
    } catch (err) {
        console.log(500).send({ message: err.message })
    };
}

const update = async (req, res) => {
    try {
        const { nome, senha, login, tipo } = req.body;


        if (!nome && !senha && !login) {
            res.status(400).send({ message: 'Pelo menos um campo precisa ser preenchido.' });
        }
        const { id, user } = req;
        await userService.updateService(
            id,
            nome,
            login,
            senha,
            tipo
        );

        res.send({ message: "Usuário atualizado com sucesso!" })
    } catch (err) {
        console.log(500).send({ message: err.message })
    };

}

export default { create, findAll, findById, update };

