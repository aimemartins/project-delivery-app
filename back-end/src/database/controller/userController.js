const UserService = require('../services/userService');
const md5 = require('../../../../__tests__/config/utils/md5');
const tokenUtils = require('../utils/generateToken');

const getAll = async (_req, res, next) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

const createUser = async (req, res, next) => {
  try {
    const userObj = req.body;
    const newUser = await UserService.createUser(userObj);

    return res.status(201).json({ newUser });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { dataValues } = await UserService.getByEmail(email);
    if (!dataValues) throw new Error('Invalid email or password');
    const passwordMd5 = md5(password);
    const isValid = passwordMd5 === dataValues.password;
    if (dataValues.email !== email || !isValid) throw new Error('Invalid email or password');
    
    const token = tokenUtils.generateToken({ email, password });
    return res.status(200).json({ token, ...dataValues });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  createUser,
  login,
};