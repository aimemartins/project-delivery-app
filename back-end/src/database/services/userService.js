const { User } = require('../models');
const schema = require('./validations/validateSchemas');

const getByEmail = (email) => User.findOne({
  where: { email },
});

const getAll = () => User.findAll({
  attributes: { exclude: ['password'] },
});

const createUser = async (obj) => {
  const { name, email, password } = obj;
  const error = schema.validateEmail(email);
  if (error) throw new Error(error.message);

  const passwordError = schema.validatePassword(password);
  if (passwordError) throw new Error(passwordError.message);
  
  const nameError = schema.validateName(name);
  if (nameError) throw new Error(nameError.message);

  const user = await getByEmail(email);
  if (user) {
    throw new Error('User already registered');
  }

  const newUser = await User.create(obj);

  return newUser;
};

module.exports = {
  getAll,
  createUser,
  getByEmail,
};