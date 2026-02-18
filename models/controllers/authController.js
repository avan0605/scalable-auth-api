const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    email: req.body.email,
    password: hashedPassword
  });

  await user.save();
  res.json({ message: "User registered" });
};
