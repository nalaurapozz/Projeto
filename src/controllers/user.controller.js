const userService = require('../services/user.service');
const mongoose = require("mongoose");


const create = async (req, res) => {
    const { nome, senha, login, tipo } = req.body;


    if (!nome || !senha || !login) {
        res.status(400).send({ message: 'Nome, senha e login são obrigatórios.' });
    }

    const user = await userService.createService(req.body);

    /*if (!user) {
        return res.status(400).send({ message: "Erro ao criar usuário" });
    };*/

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
    const users = await userService.findAllService();

    if (users.length === 0) {
        return res.status(400).send({ message: "Não há usuários cadastrados!" })
    }

    res.send(users)
};

const findById = async (req, res) => {
    const id = req.params.id;

    /*if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Usuário inválido!" });

    }*/

    const user = await userService.findByidService(id)

   /* if (!user) {
        return res.status(400).sent({ message: "Não há usuários!" })
    }*/
    res.send(user)
}

const update = async (req, res) => {
    const { nome, senha, login, tipo } = req.body;

   

    if (!nome && !senha && !login) {
        res.status(400).send({ message: 'Pelo menos um campo precisa ser preenchido.' });
    }

    const id = req.params.id;

   /*  if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Usuário inválido!" });

    } */

    const user = await userService.findByidService(id);

   /*  if (!user) {
        return res.status(400).sent({ message: "Não há usuário!" })
    } */
    
    await userService.updateService(
        id,
        nome,
        login,
        senha,
        tipo
    );

    res.send({message: "Usuário atualizado com sucesso!"})

}

module.exports = { create, findAll, findById, update };

