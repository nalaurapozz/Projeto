import Livros from "../models/Livros.js";

const createService = (body) => Livros.create(body);

const findAllService = () => Livros.find();


export {
    createService,
    findAllService
};