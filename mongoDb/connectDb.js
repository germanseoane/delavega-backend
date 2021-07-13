require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Tarjetazo40:Tarjetazo40@delavega.dvwcl.mongodb.net/delavega?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connected to MongoDb");
  } catch (err) {
    console.log("could not connnect to MongoDb");
    process.exit(1);
  }
};

module.exports = connectDb;
