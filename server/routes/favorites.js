



//favorites js



const express = require("express");
const router = express.Router();

const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {

    try {

        const user = await User.findById(req.user.userId);

        res.status(200).json({

    favorites: user.favorites

    });

    } catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});


router.post("/:id", authMiddleware, async (req, res) => {

    try {

        const productId = Number(req.params.id);

        const user = await User.findById(req.user.userId);

        if (!user.favorites.includes(productId)) {

            user.favorites.push(productId);

            await user.save();

        }

        res.status(200).json({

            favorites: user.favorites

        });

    } catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});


router.delete("/:id", authMiddleware, async (req, res) => {

    try {

        const productId = Number(req.params.id);

        const user = await User.findById(req.user.userId);

        user.favorites = user.favorites.filter(

            id => id !== productId

        );

        await user.save();

        res.status(200).json({

            favorites: user.favorites

        });

    } catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});



module.exports = router;