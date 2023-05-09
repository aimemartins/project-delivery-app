const UserService = require('../services/userService');
const tokenUtils = require('../utils/generateToken');
const md5 = require('../../../../__tests__/config/utils/md5');

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
    const passwordMd5 = md5(req.body.password);
    const userObj = {
      name: req.body.name,
      email: req.body.email,
      password: passwordMd5,
      role: 'customer',
    };
    const userExists = await UserService.getByEmail(req.body.email);
    if (userExists) throw new Error('User already exists');

    await UserService.createUser(userObj);
    const userCreated = await UserService.getByEmail(req.body.email);
    return res.status(201).json({ userCreated });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserService.login(email, password);
    
    const token = tokenUtils.generateToken({ email, password });
    return res.status(200).json({ token, ...user });
  } catch (e) {
    next(e);
  }
};
// teste new PR

module.exports = {
  getAll,
  createUser,
  login,
};