import { createService, findAllService } from '../services/livros.service.js';

const create = async (req, res) => {
    try {
        const {name, descricao} = req.body
        if (!name || !descricao) {
            res.status(400).send({ message: "Preencha todos os campos!" });
        }

        await createService({
            name,
            descricao,
            id: "idfake"
        })

        res.send(201);
    } catch (error) {
        res.status(500).send({ message: err.message }); 
    }


   
};

const findAll = (req, res) => {
    const livros = [];
    res.send(livros)
};

export{ create, findAll };