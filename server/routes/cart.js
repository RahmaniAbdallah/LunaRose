



//cart.js


const express = require("express");
const router = express.Router();

const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

// ==============================
// GET CART
// ==============================

router.get("/", authMiddleware, async (req, res) => {

    const user = await User.findById(req.user.userId);

    res.status(200).json({
        cart: user.cart,
    });

});

// ==============================
// ADD TO CART
// ==============================

router.post("/:id", authMiddleware, async (req, res) => {

    const user = await User.findById(req.user.userId);

    const productId = Number(req.params.id);

    const existingItem = user.cart.find(
        item => item.id === productId
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        user.cart.push({
            id: productId,
            quantity: 1,
        });

    }

    await user.save();

    res.status(200).json({
        cart: user.cart,
    });

});

// ==============================
// REMOVE FROM CART
// ==============================

router.delete("/:id", authMiddleware, async (req, res) => {

    const user = await User.findById(req.user.userId);

    const productId = Number(req.params.id);

    user.cart = user.cart.filter(
        item => item.id !== productId
    );

    await user.save();

    res.status(200).json({
        cart: user.cart,
    });

});

module.exports = router;
