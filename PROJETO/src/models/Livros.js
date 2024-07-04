import mongoose from 'mongoose';

const LivrosSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    descricao: {
        type: String,
        require: true,
    },
    criado: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: {
        type: Array,
        required: true,
    },
    comments: {
        type: Array,
        required: true,
    }
});
const Livros = mongoose.model("Livros", LivrosSchema);

export default Livros;  