const {
  emailSchema,
  passwordSchema,
  nameSchema,
  saleObjSchema,
} = require('./schema');

const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);
  if (error) {
    throw new Error('"email" must be a valid email');
  }
  return false;
};

const validatePassword = (password) => {
  const { error } = passwordSchema.validate(password);
  if (error) {
    throw new Error('Password must have at least 6 characters');
  }
  return false;
};

const validateName = (name) => {
  const { error } = nameSchema.validate(name);
  if (error) {
    throw new Error('Name must have at least 12 characters');
  }
};

const validateSale = (sale) => {
  const { error } = saleObjSchema.validate(sale);
  if (error) throw new Error('Incorrect values in sale received');
  return false;
};

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
  validateSale,
};
