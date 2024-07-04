import Livros from "../models/Livros.js";

const createService = (body) => Livros.create(body);

const findAllService = (offset, limit) => Livros.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countLivros = () => Livros.countDocuments();

const findByIdService = (id) => Livros.findById(id).populate("user");





export {
    createService,
    findAllService,
    countLivros,
    findByIdService
};