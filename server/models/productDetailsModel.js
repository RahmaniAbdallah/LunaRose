

//productDetailsModel.js



const mongoose = require("mongoose");

const productDetailsSchema = new mongoose.Schema(
{
    productId: {
        type: Number,
        required: true,
        unique: true
    },

    scientificName: {
        type: String,
        required: true
    },

    family: {
        type: String,
        required: true
    },

    origin: {
        type: String,
        required: true
    },

    plantType: {
        type: String,
        required: true
    },

    sunlight: {
        type: String,
        required: true
    },

    watering: {
        type: String,
        required: true
    },

    temperature: {
        type: String,
        required: true
    },

    humidity: {
        type: String,
        required: true
    },

    soilType: {
        type: String,
        required: true
    },

    growthRate: {
        type: String,
        required: true
    },

    floweringSeason: {
        type: String,
        default: "N/A"
    },

    toxicity: {
        type: String,
        default: "Non-toxic"
    },

    petFriendly: {
        type: Boolean,
        default: true
    },

    difficulty: {
        type: String,
        required: true
    },

    height: {
        type: String,
        required: true
    },

    lifespan: {
        type: String,
        default: "Several years"
    },

    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "ProductDetails",
    productDetailsSchema
);