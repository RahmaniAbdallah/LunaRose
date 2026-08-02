







//app js






require("dotenv").config();

const cartRoutes = require("./routes/cart");
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const productDetailsRoutes = require("./routes/productDetailsRoutes");
const authRoutes = require("./routes/auth");
const favoritesRoutes = require("./routes/favorites");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

app.use("/api/auth", authRoutes);

app.use("/api/favorites", favoritesRoutes);

app.use("/api/cart", cartRoutes);




app.use("/api/details", productDetailsRoutes);
 


app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "../client/html/index.html"));

});


module.exports = app;