const Joi = require('joi');

const emailSchema = Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: false } });
const passwordSchema = Joi.string().min(6).required();
const nameSchema = Joi.string().min(12).required();
const saleObjSchema = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  status: Joi.string().required(),
});

module.exports = {
  emailSchema,
  passwordSchema,
  nameSchema,
  saleObjSchema,
};