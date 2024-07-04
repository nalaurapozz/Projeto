import mongoose from 'mongoose';
import userService from "../services/user.service.js";

export const validId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Usuário inválido!" });

    }

    next();
};

export const validUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).sent({ message: "Não há usuários!" })
    }

    req.id = id;
    req.user = user;
    next();

};

/* module.exports = (req, res, next) => {
    if (req.user && req.user.tipo === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Acesso negado. Apenas admins podem realizar esta ação.' });
    }
}; */