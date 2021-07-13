require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./mongoDb/connectDb");
const productsRoute = require("./routes/productsRoute");
const usersRoute = require("./routes/usersRoute");
const authRoute = require("./routes/authRoute");
const addressesRoute = require("./routes/addressesRoute");

if (!process.env.delavega_jwtPrivateKey) {
  console.log("FATAL ERROR: jwtPrivateKey not defined");
  process.exit(1);
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/addresses", addressesRoute);

connectDb();

app.get("/", async (req, res) => {
  res.send("<h2>DeLaVega Backend</h2>");
});

const host = process.env.HOST || "0.0.0.0";

const port = process.env.PORT || 5000;
app.listen(port, console.log(`listening to port: ${port}`));
