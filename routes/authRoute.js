require("dotenv").config();
const { User } = require("../models/users");
const express = require("express");
const Joi = require("joi");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  res.send("polainas");
});

router.post("/", async (req, res) => {
  const result = validateAuth(req.body);
  if (result.error) {
    res.status(400).send({error: result.error.message});
    return;
  }

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({error: "Invalid email or password"});

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid email or password");
  }
  const token = jwt.sign({ _id: user._id }, process.env.delavega_jwtPrivateKey);
  res.send({ email: user.email, name: user.name , token: token});
});

function validateAuth(user) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(255).required(),
  });
  return schema.validate(user);
}

module.exports = router;
