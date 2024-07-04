const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({ 
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    tipo: {type: String},
    login: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UsuarioSchema);
  
module.exports = User;