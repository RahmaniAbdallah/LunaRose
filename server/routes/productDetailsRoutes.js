


//productDetailsRoutes js



const express = require("express");
const router = express.Router();

const {
    getProductDetails,
} = require("../controllers/productDetailsController");

router.get("/:id", getProductDetails);

module.exports = router;