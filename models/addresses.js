const mongoose = require("mongoose");
const Joi = require("joi");

const addressesSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Address = mongoose.model("addresses", addressesSchema);

function validateAddress(address) {
  const schema = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().min(2).required(),
  });
  return schema.validate(address);
}

exports.Address = Address;
exports.validateAddress = validateAddress;
