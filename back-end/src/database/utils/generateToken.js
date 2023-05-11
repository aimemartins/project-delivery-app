const Jwt = require('jsonwebtoken');

const path = require('path');
const fs = require('fs');

const JWT_SECRET = path.resolve(__dirname, '../../../jwt.evaluation.key');

const secret = fs.readFileSync(JWT_SECRET, 'utf8');

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
