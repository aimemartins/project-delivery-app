const UserService = require('../services/userService');
// const generateToken = require('../utils/generateToken');
// const login = require('./login');

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

    // const myToken = generateToken(userObj.email, userObj.password);
    return res.status(201).json({ newUser });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

module.exports = {
  getAll,
  createUser,
};