const UserService = require('../services/userService');
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
    const user = await UserService.login(email, password);
    
    const token = tokenUtils.generateToken({ email, password });
    return res.status(200).json({ token, ...user });
  } catch (e) {
    next(e);
  }
};
// teste

module.exports = {
  getAll,
  createUser,
  login,
};