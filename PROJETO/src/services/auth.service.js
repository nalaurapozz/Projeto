import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const loginService = (login) => User.findOne({ login: login }).select("+senha");

const geraToken = (id) => jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

export { loginService, geraToken };