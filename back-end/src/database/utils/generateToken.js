const Jwt = require('jsonwebtoken');

const secret = 'secret_key';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = Jwt.sign({ payload }, secret, jwtConfig);

  return token;
};

const decodeToken = (token) => {
  const { payload } = Jwt.verify(token, secret);
  return payload;
};

module.exports = {
  generateToken,
  decodeToken,
};
