import { createService, findAllService, countLivros, findByIdService, searchByTitleService, byUserService, updateService } from '../services/livros.service.js';
import { ObjectId } from 'mongoose';

const create = async (req, res) => {
    try {

        const { name, descricao } = req.body;


        if (!name || !descricao) {
            res.status(400).send({ message: "Preencha todos os campos!" });
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
    try {
        let { limit, offset } = req.query;

        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }
        if (!offset) {
            offset = 0;
        }


        const livros = await findAllService(offset, limit);

        const total = await countLivros();
        const currentUrl = req.baseUrl;



        const next = offset + limit;
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null

        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null

        if (livros.length === 0) {
            return res.status(400).send({ message: "Não há livros cadastrados!" })
        }
        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,

            results: livros.map((item) => ({
                id: item._id,
                name: item.name,
                descricao: item.descricao,
                login: item.login,
                likes: item.likes,
                comments: item.comments,
                userName: item.user.nome
            }))

        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }


};

const findById = async (req, res) => {
    try {

        const { id } = req.params;

        const livros = await findByIdService(id);

        return res.send({
            livros: {
                id: livros._id,
                name: livros.name,
                likes: livros.likes,
                comments: livros.comments,
                nome: livros.user.nome,
                login: livros.user.login,
            }
        })

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const searchByTitle = async (req, res) => {
    try {
        const { name } = req.query;

        const livros = await searchByTitleService(name);

        if (livros.length === 0) {
            return res.status(400).send({ message: "Não nem um livro com este nome!" });
        }


        return res.send({
            results: livros.map((item) => ({
                id: item._id,
                name: item.name,
                descricao: item.descricao,
                login: item.login,
                likes: item.likes,
                comments: item.comments,
                userName: item.user.nome
            }))
        })



    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const byUser = async (req, res) => {

        try {
            const id = req.userId;
            const livros = await byUserService(id);
            return res.send({
                results: livros.map((item) => ({
                    id: item._id,
                    name: item.name,
                    descricao: item.descricao,
                    login: item.login,
                    likes: item.likes,
                    comments: item.comments,
                    userName: item.user.nome
                }))
            })

        } catch (err) {
            res.status(500).send({ message: err.message });
        }
}

const update = async (req, res) => { 

        try {
            const { name, descricao } = req.body;
            const { id } = req.params;

            if (!name || !descricao) {
                res.status(400).send({ message: "Preencha todos os campos!" });
            }

            const livros = await findByIdService(id);

            if (livros.user._id != req.userId) {
                return res.status(400).send({ message: "Você não pode atualizar esse livro!" });
            }
            await updateService(id, name, descricao);

            return res.send({message: "Livro atualizado com sucesso!"})
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
}



export { create, findAll, findById, searchByTitle, byUser, update };