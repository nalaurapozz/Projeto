import { createService, findAllService } from '../services/livros.service.js';
import { ObjectId } from 'mongoose';

const create = async (req, res) => {
    try {

        const { name, descricao } = req.body;
        

        if (!name || !descricao) {
            res.status(400).send({ message: "Preencha todos os campos!"});
        }

        await createService({
            name,
            descricao,
            user: req.userId,
        });

        res.send(201);
    } catch (err) {
        res.status(500).send({ message: err.message }); 
    }


   
};

const findAll = async (req, res) => {
    const livros = await findAllService();
    if (livros.length === 0) {
        return res.status(400).send({ message: "Não há livros cadastrados!" })
    }
    res.send(livros)
};

export{ create, findAll };