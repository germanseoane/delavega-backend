const mongoose = require("mongoose");
const Joi = require("joi");

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productsSchema);

function validateProduct(product) {
  const schema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
  });
  return schema.validate(product);
}

exports.Product = Product;
exports.validateProduct = validateProduct;
