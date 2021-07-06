const express = require("express");
const router = express.Router();
const { Product, validateProduct } = require("../models/products");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort("title");
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
