const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const JWT_SECRET = path.resolve(__dirname, '../../../jwt.evaluation.key');

const secret = fs.readFileSync(JWT_SECRET, 'utf8');

const UserService = require('../services/userService');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decode = jwt.verify(token, secret);
    console.log(decode);
    const { email } = decode.data;
    const user = await UserService.getByEmail(email);
    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });
    next();
  } catch (e) {
    console.log(e.message);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};