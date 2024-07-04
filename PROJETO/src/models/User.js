import mongoose from 'mongoose';
import bcrypt from "bcrypt";
//import UserService from '../services/user.service';

const UsuarioSchema = new mongoose.Schema({ 
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select : false
    },
    tipo: {type: String},
    login: {
        type: String,
        required: true,
        unique: true
    }
});


UsuarioSchema.pre("save", async function (next){
    this.senha = await bcrypt.hash(this.senha, 10);
    next();
});


const User = mongoose.model("User", UsuarioSchema);
  
export default  User;