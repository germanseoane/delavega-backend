const { User, validateUser } = require("../models/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const result = validateUser(req.body);
  if (result.error) {
<<<<<<< HEAD
    res.status(400).send({ error: result.error.message });
=======
    res.status(400).send({error: result.error.message});
>>>>>>> e0f6f20165c12ea6d56c37d63db0e2878199dc62
    return;
  }

  let user = await User.findOne({ email: req.body.email });
<<<<<<< HEAD
  if (user) return res.status(400).send({ error: "User already registered." });
=======
  if (user) return res.status(400).send({error: "User already registered."});
>>>>>>> e0f6f20165c12ea6d56c37d63db0e2878199dc62

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = jwt.sign({ _id: user._id }, process.env.delavega_jwtPrivateKey);
  
  res.header("x-auth-token", token).send({
    name: user.name,
    email: user.email,
    token: token,
  });
});

module.exports = router;
