const Joi = require('joi');

const emailSchema = Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: false } });
const passwordSchema = Joi.string().min(6).required();
const nameSchema = Joi.string().min(12).required();

module.exports = {
  emailSchema,
  passwordSchema,
  nameSchema,
};