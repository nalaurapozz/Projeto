import User from "../models/User.js";


const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

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

export default  {
    createService,
    findAllService,
    findByIdService,
    updateService,
};