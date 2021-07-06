const mongoose = require("mongoose");
const Joi = require("joi");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", usersSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(255).required(),
  });
  return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
