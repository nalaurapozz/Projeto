import Livros from "../models/Livros.js";

const createService = (body) => Livros.create(body);

const findAllService = (offset, limit) => Livros.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countLivros = () => Livros.countDocuments();

const findByIdService = (id) => Livros.findById(id).populate("user");


const searchByTitleService = (name) => Livros.find({
    name: { $regex: `${name || ""}`, $options: "i" },
}).sort({ _id: -1 }).populate("user");


const byUserService = (id) => Livros.find({user: id}).sort({ _id: -1 }).populate("user");


export {
    createService,
    findAllService,
    countLivros,
    findByIdService,
    searchByTitleService,
    byUserService

};