const connectDb = require("./connectDb");
const productsData = require("./productsData");
const { Product } = require("../models/products");

connectDb();

const dataSeeder = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);

    console.log("Data import success");
    process.exit();
  } catch (err) {
    console.log("Error with data import", err);
    process.exit(1);
  }
};

dataSeeder();
