const { Address, validateAddress } = require("../models/addresses");
require("dotenv").config();
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const newAddresses = await Address.find({ userId: req.params.id });

  if (!newAddresses) {
    return { message: "You have now addresses" };
  } else {
    res.status(200).send(newAddresses);
  }
});

router.post("/", async (req, res) => {
  const result = validateAddress(req.body);
  if (result.error) {
    res.status(400).send({ error: result.error.message });
    return;
  }

  const newAddress = new Address({
    userId: req.body.userId,
    title: req.body.title,
    address: req.body.address,
    phone: req.body.phone,
    city: req.body.city,
    country: req.body.country,
  });

  await newAddress.save();

  res.send({
    userId: newAddress.userId,
    title: newAddress.title,
    address: newAddress.address,
  });
});

module.exports = router;
