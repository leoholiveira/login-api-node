const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  users: async () => await User.findAll(),
  me: async (args, req) => {
    if (!req.user) throw new Error('Não autenticado');
    return await User.findByPk(req.user.id);
  },
  register: async ({ name, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    return { ...user.toJSON(), token: null };
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Usuário não encontrado');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Senha inválida');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { ...user.toJSON(), token };
  },
};
