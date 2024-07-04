const User = require("../models/User");


const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByidService = (id) => User.findById(id);

const updateService = (
    id,
    nome,
    login,
    senha,
    tipo
) =>
    User.findOneAndUpdate(
        { _id: id },
        { nome, login, senha, tipo }
    );

module.exports = {
    createService,
    findAllService,
    findByidService,
    updateService,
};