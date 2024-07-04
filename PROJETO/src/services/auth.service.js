import User from '../models/User.js';

const loginService = (login) => User.findOne({ login: login }).select("+senha");

export { loginService };