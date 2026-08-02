




// Auth js

const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists.",
      });
    }
     const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      email,
      password :hashedPassword, 
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});





router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "Invalid email or password."
      });

    }

    const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {

  return res.status(400).json({

    message: "Invalid email or password."

  });

}


const token = jwt.sign(
  {
    userId: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);


res.status(200).json({

  message: "Login successful.",

  token,

  user: {
    fullName: user.fullName,
    email: user.email,
    createdAt: user.createdAt
  }

});

  } catch (error) {

    res.status(500).json({

      message: "Server Error"

    });

  }

});



router.get("/me", authMiddleware, async (req, res) => {

    try {

        const user = await User.findById(req.user.userId).select("-password");

        if (!user) {

            return res.status(404).json({

                message: "User not found."

            });

        }

        res.status(200).json(user);

    } catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});

module.exports = router;