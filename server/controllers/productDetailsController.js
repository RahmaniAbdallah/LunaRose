


//productDetailsController js 



const ProductDetails = require("../models/productDetailsModel");

const getProductDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await ProductDetails.findOne({
            productId: Number(id),
        });

        if (!product) {
            return res.status(404).json({
                message: "Product details not found.",
            });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getProductDetails,
};