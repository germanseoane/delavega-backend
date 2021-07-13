require("dotenv").config();
const { User } = require("../models/users");
const express = require("express");
const Joi = require("joi");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const result = validateAuth(req.body);
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
  if (!user)
    return res.status(400).send({ error: "Invalid email or password" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send({ error: "Invalid email or password" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.delavega_jwtPrivateKey);
  res.send({ email: user.email, name: user.name, token: token });
=======
  if (!user) return res.status(400).send({error: "Invalid email or password"});

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send({error: "Invalid email or password"});
  }
  const token = jwt.sign({ _id: user._id }, process.env.delavega_jwtPrivateKey);
  res.send({ email: user.email, name: user.name , token: token});
>>>>>>> e0f6f20165c12ea6d56c37d63db0e2878199dc62
});

function validateAuth(user) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(255).required(),
  });
  return schema.validate(user);
}

module.exports = router;
